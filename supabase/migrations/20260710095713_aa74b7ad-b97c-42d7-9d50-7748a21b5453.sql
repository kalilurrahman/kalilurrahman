
REVOKE EXECUTE ON FUNCTION public.has_role(UUID, public.app_role) FROM PUBLIC, anon;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;

-- Storage RLS: only admins can read/write objects in the corpus bucket
CREATE POLICY "Admins read corpus" ON storage.objects FOR SELECT TO authenticated
  USING (bucket_id = 'corpus' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins upload corpus" ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'corpus' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins delete corpus" ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'corpus' AND public.has_role(auth.uid(), 'admin'));
