import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL, // or process.env for Next.js
  import.meta.env.VITE_SUPABASE_ANON_KEY
);
