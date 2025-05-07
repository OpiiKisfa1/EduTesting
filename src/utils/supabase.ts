import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vkaylgjqraluujrfffos.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrYXlsZ2pxcmFsdXVqcmZmZm9zIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NTQ4MjU2OSwiZXhwIjoyMDYxMDU4NTY5fQ.-u3qq8p3G4jyCPKZhDX8hnsvsRAhUoXxvx1-23wXy7w';

export const supabase = createClient(supabaseUrl, supabaseKey);