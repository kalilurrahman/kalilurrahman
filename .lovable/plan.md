
# Tailored CV Generator — Build Plan

A dedicated feature at `/tailored-cv` that composes a role-specific CV, cover letter, and talking points from your master corpus, tailored to any Industry + Role + Job Description a visitor supplies.

## What visitors and you get

**Public visitors (no login)**
- Form: Industry, Role, JD (paste text or paste URL), Persona (AI Advisor / GCC / CoE / Digital Transformation), Tone (Formal / Narrative / Punchy).
- Result on-screen: tailored summary, top 5 matching achievements, 3 talking points, "why fit" note.
- Rate limit: **3 generations per visitor per day** (tracked by hashed IP + browser fingerprint; no PII stored).
- CTA: "Contact Kalilur for the full tailored CV."

**You (signed in, admin role)**
- Everything above, plus:
- Full tailored CV rendered on-screen with all sections.
- Export buttons: **PDF**, **DOCX**, **Markdown**, **ATS plain text**, **LinkedIn About**.
- "Save this variant" button — stores in Cloud so you can revisit and refine.
- Corpus manager at `/tailored-cv/admin`: upload PDFs/DOCX, add URLs, view/delete entries.

## Sign-in

Email + password **and** Google sign-in, both enabled. First user to register with your email is auto-granted the `admin` role via a one-time bootstrap (documented so only you know how); anyone else who signs up gets no elevated access. Sign-in only enables owner features — the public generator remains available to everyone anonymously.

## Corpus (empty at launch — you fill it)

- **File uploads**: PDF, DOCX. Parsed to text server-side, chunked (~1,500 chars, 200 overlap), stored with metadata (persona tags, source type: cv / cover-letter / testimonial / book / other).
- **URLs**: added by you; fetched, stripped of chrome, stored as text (LinkedIn export PDF, GitHub, Thinkers360, book pages, etc.).
- **Retrieval strategy v1**: send curated persona-tagged chunks + full JD to Gemini 2.5 Pro (1M-token window). No embeddings yet — added later if corpus grows beyond ~200k tokens.

## Personas (seeded)

Four persona templates matching your existing profile pages — each has its own default tone, section ordering, and emphasis:
- **AI Advisor / AI Leader** — AI governance, GenAI, thought leadership first.
- **GCC Advisor** — scale, geography, hub build-out, transformation.
- **CoE / QE Champion** — automation, frameworks, margin turnaround.
- **Digital Transformation Executive** — enterprise scale, C-suite alignment.

You can override persona selection per generation.

## Output formats

| Format | Delivery |
|---|---|
| On-screen interactive CV | All visitors |
| PDF | Owner only — server-rendered via ReportLab in `export-cv` edge function |
| DOCX | Owner only — via `docx` npm library |
| Markdown | Owner only — direct download |
| ATS plain text | Owner only — direct download |
| LinkedIn About | Owner only — copy button |

## Technical details

**Lovable Cloud enabled.** Tables in `public` schema (each with explicit GRANTs + RLS):

- `profiles` — id (fk auth.users), email, display_name
- `user_roles` — id, user_id, role (`app_role` enum: `admin`, `user`) with `has_role(uuid, app_role)` security-definer function
- `corpus_documents` — id, owner_id, source_type, persona_tags text[], title, file_path (storage), parsed_text, chunk_json jsonb, created_at
- `corpus_urls` — id, owner_id, url, title, persona_tags text[], fetched_text, created_at
- `generated_cvs` — id, owner_id, industry, role, jd_text, jd_url, persona, tone, output_json jsonb, created_at
- `generation_rate_limits` — id, visitor_hash, day date, count

**Storage bucket**: `corpus` (private). RLS: only admins read/write.

**Edge functions** (all `verify_jwt = false`, in-code JWT check where needed):

- `ingest-document` — auth required, admin only. Accepts uploaded file ref, uses `pdfjs`/`mammoth` to extract text, chunks, upserts into `corpus_documents`.
- `ingest-url` — auth required, admin only. Fetches URL, strips HTML, stores in `corpus_urls`.
- `generate-cv` — public. Zod-validates body, checks rate limit (skips if valid admin JWT), retrieves persona-scoped corpus, calls Lovable AI `google/gemini-2.5-pro`, returns structured JSON `{summary, achievements[], sections[], cover_letter, talking_points[], why_fit}`. Redacts full details for anonymous callers (returns preview shape only).
- `export-cv` — auth required, admin only. Takes CV id or JSON + format (`pdf`|`docx`|`md`|`txt`|`linkedin`), returns file/base64.

**Frontend** (matches Portfolio's Apple-minimal aesthetic — Fraunces/Inter Tight, restrained palette, no purple gradients):

- `src/pages/TailoredCV.tsx` — main generator page. React Hook Form + Zod. Live preview.
- `src/pages/TailoredCVAdmin.tsx` — owner-only corpus manager. Dropzone upload, URL list, corpus table.
- `src/pages/Auth.tsx` — email/password + Google sign-in card, matched to portfolio styling.
- `src/hooks/use-auth.ts`, `src/hooks/use-is-admin.ts`.
- Routes added to `src/App.tsx`.
- Nav entry in `Navbar.tsx` — "Tailored CV" link visible to all; "CV Corpus" link visible only to admin.

**AI model choice**: `google/gemini-2.5-pro` for composition (best long-context reasoning during free window ending Oct 13, 2025; then metered). `google/gemini-2.5-flash` for cheap URL summarising during ingest.

## Build order

1. Enable Lovable Cloud.
2. Auth setup (email/password + Google) + `profiles`, `user_roles`, `has_role` function.
3. Storage bucket + corpus tables + RLS + GRANTs.
4. Edge functions: `ingest-document`, `ingest-url`, `generate-cv`, `export-cv`.
5. Auth page + `use-auth` / `use-is-admin` hooks.
6. `/tailored-cv` public generator page.
7. `/tailored-cv/admin` corpus manager.
8. Nav + routes + SEO metadata for the new pages.

## Cost note

Lovable AI Gateway is free through **October 13, 2025**, then metered. Gemini 2.5 Pro is ~$1.25/$5 per M input/output tokens after that. A typical CV generation uses ~30k input + 3k output tokens ≈ $0.05 per generation. The 3/day public rate limit keeps monthly exposure predictable.

## What you'll do after I ship v1

- Sign in via `/auth`, grab admin role.
- Upload 3–8 source files in `/tailored-cv/admin` (master CV, 2 role variants, cover letter, LinkedIn PDF).
- Add 4–6 URLs (LinkedIn, GitHub, book pages).
- Test with a real JD, iterate on tone/persona output.

Approve to proceed and I'll build it end-to-end.
