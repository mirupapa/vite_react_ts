import { auth } from '@/util/firebase'
import { User } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'

type Auth = {
  user: User | undefined
}

const AuthContext = createContext<Auth>({ user: undefined })

export const useAuthContext = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: { children: React.ReactChild }) => {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState(true)
  const initialValue = {
    user,
  }
  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      user && setUser(user)
      setLoading(false)
    })
    return () => {
      unsubscribed()
    }
  }, [])
  return <AuthContext.Provider value={initialValue}>{!loading && children}</AuthContext.Provider>
}
