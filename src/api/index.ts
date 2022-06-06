import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://mzxteidxlrdbrolvnbie.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16eHRlaWR4bHJkYnJvbHZuYmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTQzNTY4MTIsImV4cCI6MTk2OTkzMjgxMn0.8So2-qoL-u2b11CGQAj56v0d_5Ljc8-AMv-ZbtVmKt4"
);
