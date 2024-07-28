import { useState, useEffect } from 'react'
import { supabase } from '../supabase'
import { User } from '@supabase/supabase-js'

export function useAuth() {
  const [user, setUser] = useState<User | null>()
  const [loadingUser, setLoadingUser] = useState<boolean>(true)

  useEffect(() => { 
    setLoadingUser(true)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      setLoadingUser(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  return { user, loadingUser }
}