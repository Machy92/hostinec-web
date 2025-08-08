// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ducvummhnhocqrlpkeup.supabase.co';       // Vložte sem svoji URL z nastavení Supabase
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR1Y3Z1bW1obmhvY3FybHBrZXVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0NzQ3ODgsImV4cCI6MjA3MDA1MDc4OH0.v82_51ScviRs2ESMepBSEsWmNdN6UADakLzFyBjplOM';  // Vložte sem svůj anon public klíč

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
