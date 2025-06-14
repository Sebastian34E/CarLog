import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uzzkbxfwhinycchbnxjb.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6emtieGZ3aGlueWNjaGJueGpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg5NzI5MDEsImV4cCI6MjA2NDU0ODkwMX0.USHxI_xOA_9WRhvriV0-DjOKCeBV2G6kIWYhqvBJUMs";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
