// Tailored CV generation edge function
// Public endpoint. Anonymous callers get preview shape; admins get full CV.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;

const RATE_LIMIT_PER_DAY = 3;
const MAX_CORPUS_CHARS = 400_000; // safety cap on prompt size

type Persona = 'ai-advisor' | 'gcc-advisor' | 'coe-champion' | 'digital-transformation';

const PERSONA_BRIEF: Record<Persona, string> = {
  'ai-advisor': 'AI Advisor / AI Leader — emphasise AI governance, GenAI adoption, AI thought leadership, ACUITAS/VERITAS frameworks, Kaggle credentials.',
  'gcc-advisor': 'GCC Advisor — emphasise scaling Global Capability Centers, hub build-out from inception, geographic scale, cost arbitrage, transformation of 400+ person orgs.',
  'coe-champion': 'CoE / Quality Engineering Champion — emphasise TCoE turnaround (-5% to 30%+ margin), test automation frameworks, 220+ team scale, published books.',
  'digital-transformation': 'Digital Transformation Executive — emphasise enterprise-scale digital transformation, C-suite alignment, cloud/DevOps, GxP/regulated environments.',
};

async function hashVisitor(req: Request): Promise<string> {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
  const ua = req.headers.get('user-agent') ?? '';
  const data = new TextEncoder().encode(`${ip}::${ua}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest)).map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 32);
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const body = await req.json();
    const { industry, role, jd, persona, tone } = body ?? {};

    if (!role || typeof role !== 'string' || role.length > 300) {
      return json({ error: 'role required (max 300 chars)' }, 400);
    }
    if (!jd || typeof jd !== 'string' || jd.length > 20000) {
      return json({ error: 'jd required (max 20000 chars)' }, 400);
    }
    const personaKey = (persona ?? 'ai-advisor') as Persona;
    if (!PERSONA_BRIEF[personaKey]) return json({ error: 'invalid persona' }, 400);
    const toneStr = (tone ?? 'formal').toString().slice(0, 40);
    const industryStr = (industry ?? '').toString().slice(0, 200);

    // Check caller: is admin?
    const authHeader = req.headers.get('Authorization') ?? '';
    const adminClient = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    let isAdmin = false;
    let userId: string | null = null;
    if (authHeader.startsWith('Bearer ')) {
      const token = authHeader.slice(7);
      const userClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
        global: { headers: { Authorization: authHeader } },
      });
      const { data: userData } = await userClient.auth.getUser(token);
      if (userData?.user) {
        userId = userData.user.id;
        const { data: role } = await adminClient
          .from('user_roles')
          .select('role')
          .eq('user_id', userId)
          .eq('role', 'admin')
          .maybeSingle();
        isAdmin = !!role;
      }
    }

    // Rate limit anonymous / non-admin callers
    if (!isAdmin) {
      const visitor = await hashVisitor(req);
      const today = new Date().toISOString().slice(0, 10);
      const { data: existing } = await adminClient
        .from('generation_rate_limits')
        .select('id, count')
        .eq('visitor_hash', visitor)
        .eq('day', today)
        .maybeSingle();
      const current = existing?.count ?? 0;
      if (current >= RATE_LIMIT_PER_DAY) {
        return json({ error: 'Daily limit reached. Sign in for unlimited access or try again tomorrow.', code: 'rate_limited' }, 429);
      }
      if (existing) {
        await adminClient.from('generation_rate_limits').update({ count: current + 1 }).eq('id', existing.id);
      } else {
        await adminClient.from('generation_rate_limits').insert({ visitor_hash: visitor, day: today, count: 1 });
      }
    }

    // Retrieve corpus (persona-tagged first, then untagged, capped by MAX_CORPUS_CHARS)
    const [docsRes, urlsRes] = await Promise.all([
      adminClient.from('corpus_documents').select('title, source_type, persona_tags, parsed_text').limit(50),
      adminClient.from('corpus_urls').select('title, url, persona_tags, fetched_text').limit(30),
    ]);
    const docs = docsRes.data ?? [];
    const urls = urlsRes.data ?? [];

    const scoreEntry = (tags: string[] | null) => {
      if (!tags || tags.length === 0) return 1;
      return tags.includes(personaKey) ? 3 : 0.5;
    };

    const corpusEntries: { title: string; text: string; score: number }[] = [];
    for (const d of docs) if (d.parsed_text) corpusEntries.push({ title: `[${d.source_type}] ${d.title}`, text: d.parsed_text, score: scoreEntry(d.persona_tags) });
    for (const u of urls) if (u.fetched_text) corpusEntries.push({ title: `[URL] ${u.title ?? u.url}`, text: u.fetched_text, score: scoreEntry(u.persona_tags) });
    corpusEntries.sort((a, b) => b.score - a.score);

    let assembled = '';
    for (const e of corpusEntries) {
      const chunk = `\n\n===== ${e.title} =====\n${e.text}`;
      if (assembled.length + chunk.length > MAX_CORPUS_CHARS) {
        assembled += chunk.slice(0, MAX_CORPUS_CHARS - assembled.length);
        break;
      }
      assembled += chunk;
    }

    const corpusBlock = assembled.trim().length > 0
      ? assembled
      : '(No corpus material uploaded yet. Compose based on general Kalilur Rahman public profile: 29+ years IT, Novartis GCC Director, Kaggle Grandmaster, 3 published books, Thinkers360 top thought leader.)';

    const systemPrompt = `You are a senior executive-CV writer composing a tailored CV for Kalilur Rahman.
Persona focus: ${PERSONA_BRIEF[personaKey]}
Tone: ${toneStr}.
You MUST ground every claim in the provided CORPUS. Do not fabricate roles, companies, dates, or metrics. If corpus is thin, keep claims general and true.
Output STRICT JSON matching the schema below — no prose outside JSON.

Schema:
{
  "headline": string (1 line, role-fit statement),
  "summary": string (3-5 sentences, tailored to the JD),
  "achievements": Array<{ "text": string, "evidence": string }> (5-8 items, quantified when corpus supports),
  "experience": Array<{ "role": string, "org": string, "period": string, "highlights": string[] }> (chronological, most recent first, only from corpus),
  "skills_matched": string[] (skills from JD that Kalilur has, evidenced),
  "cover_letter": string (250-400 words, addressed to hiring team),
  "talking_points": string[] (3-5 interview talking points),
  "why_fit": string (2-3 sentences explaining the match)
}`;

    const userPrompt = `INDUSTRY: ${industryStr}
ROLE: ${role}

JOB DESCRIPTION:
${jd}

CORPUS (Kalilur's authoritative source material — cite only from here):
${corpusBlock}

Return the tailored CV as JSON only.`;

    // Call Lovable AI Gateway
    const aiRes = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-pro',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt },
        ],
        response_format: { type: 'json_object' },
      }),
    });

    if (!aiRes.ok) {
      const errText = await aiRes.text();
      console.error('AI gateway error', aiRes.status, errText);
      if (aiRes.status === 429) return json({ error: 'AI rate limit reached, please retry in a minute.' }, 429);
      if (aiRes.status === 402) return json({ error: 'AI credits exhausted. Please add credits in workspace billing.' }, 402);
      return json({ error: 'AI generation failed', details: errText }, 500);
    }

    const aiJson = await aiRes.json();
    const content = aiJson.choices?.[0]?.message?.content;
    if (!content) return json({ error: 'AI returned empty content' }, 500);

    let cv: Record<string, unknown>;
    try {
      cv = JSON.parse(content);
    } catch {
      return json({ error: 'AI returned non-JSON', raw: content }, 500);
    }

    // Preview shape for anonymous
    if (!isAdmin) {
      const preview = {
        headline: cv.headline,
        summary: cv.summary,
        achievements: Array.isArray(cv.achievements) ? cv.achievements.slice(0, 5) : [],
        talking_points: Array.isArray(cv.talking_points) ? cv.talking_points.slice(0, 3) : [],
        why_fit: cv.why_fit,
        _preview: true,
      };
      return json({ cv: preview, isAdmin: false });
    }

    return json({ cv, isAdmin: true });
  } catch (err) {
    console.error('generate-cv error', err);
    return json({ error: err instanceof Error ? err.message : String(err) }, 500);
  }
});

function json(obj: unknown, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  });
}
