// Fetch a URL, strip HTML chrome, store text in corpus_urls. Admin only.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const SUPABASE_ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });
  try {
    const authHeader = req.headers.get('Authorization') ?? '';
    if (!authHeader.startsWith('Bearer ')) return json({ error: 'unauthenticated' }, 401);

    const userClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData } = await userClient.auth.getUser();
    if (!userData?.user) return json({ error: 'unauthenticated' }, 401);
    const admin = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);
    const { data: roleRow } = await admin.from('user_roles').select('role').eq('user_id', userData.user.id).eq('role', 'admin').maybeSingle();
    if (!roleRow) return json({ error: 'admin only' }, 403);

    const { url, title, persona_tags } = await req.json();
    if (!url || typeof url !== 'string') return json({ error: 'url required' }, 400);
    let parsed: URL;
    try { parsed = new URL(url); } catch { return json({ error: 'invalid url' }, 400); }
    if (!['http:', 'https:'].includes(parsed.protocol)) return json({ error: 'invalid url' }, 400);

    const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 KR-CV-Bot' } });
    if (!res.ok) return json({ error: `fetch failed: ${res.status}` }, 400);
    const contentType = res.headers.get('content-type') ?? '';
    if (!contentType.includes('text/html') && !contentType.includes('text/plain')) {
      return json({ error: `unsupported content-type: ${contentType}. Download the file and upload it directly instead.` }, 400);
    }
    const html = await res.text();
    const text = stripHtml(html).slice(0, 200_000);

    const insert = await admin.from('corpus_urls').insert({
      owner_id: userData.user.id,
      url,
      title: title ?? parsed.hostname,
      persona_tags: Array.isArray(persona_tags) ? persona_tags : [],
      fetched_text: text,
      char_count: text.length,
    }).select().single();
    if (insert.error) return json({ error: insert.error.message }, 500);
    return json({ ok: true, entry: insert.data });
  } catch (err) {
    console.error(err);
    return json({ error: err instanceof Error ? err.message : String(err) }, 500);
  }
});

function stripHtml(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

function json(obj: unknown, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
}
