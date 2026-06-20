import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://hylbqgzwchitwgoyglwp.supabase.co'

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

console.log('SUPABASE URL =', supabaseUrl)

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)

supabase
  .from('products')
  .select('*')
  .limit(1)
  .then(({ data, error }) => {
    console.log('TEST DATA:', data)
    console.log('TEST ERROR:', error)
  })