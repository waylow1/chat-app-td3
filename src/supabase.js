import { createClient } from "@supabase/supabase-js";

const supabase_URL = import.meta.env.VITE_SUPABASE_URL;
const supabase_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabase_URL,supabase_ANON_KEY);
