// One-shot admin bootstrap. Creates an auth user (email confirmed) and grants admin.
// Protected by a shared secret header.
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-bootstrap-token",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });

  const url = Deno.env.get("SUPABASE_URL")!;
  const service = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
  const admin = createClient(url, service, { auth: { persistSession: false } });

  const { email, password } = await req.json();
  if (!email) return new Response(JSON.stringify({ error: "email required" }), { status: 400, headers: cors });

  // Find or create the user
  let userId: string | null = null;
  const { data: list } = await admin.auth.admin.listUsers({ page: 1, perPage: 200 });
  const existing = list?.users.find((u) => u.email?.toLowerCase() === String(email).toLowerCase());
  if (existing) {
    userId = existing.id;
    if (password) {
      await admin.auth.admin.updateUserById(userId, { password, email_confirm: true });
    }
  } else {
    const { data: created, error } = await admin.auth.admin.createUser({
      email, password, email_confirm: true,
    });
    if (error) return new Response(JSON.stringify({ error: error.message }), { status: 400, headers: cors });
    userId = created.user!.id;
  }

  const { error: roleErr } = await admin
    .from("user_roles")
    .upsert({ user_id: userId, role: "admin" }, { onConflict: "user_id,role" });
  if (roleErr) return new Response(JSON.stringify({ error: roleErr.message }), { status: 400, headers: cors });

  return new Response(JSON.stringify({ ok: true, user_id: userId }), {
    headers: { ...cors, "content-type": "application/json" },
  });
});
