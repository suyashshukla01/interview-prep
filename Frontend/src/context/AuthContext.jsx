import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { getMe, loginUser, logoutUser, registerUser } from '../api/auth.api.js'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMe()
      .then((res) => setUser(res.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false))
  }, [])

  const login = useCallback(async (credentials) => {
    const res = await loginUser(credentials)
    setUser(res.user)
    return res.user
  }, [])

  const register = useCallback(async (data) => {
    const res = await registerUser(data)
    setUser(res.user)
    return res.user
  }, [])

  const logout = useCallback(async () => {
    await logoutUser().catch(() => {})
    setUser(null)
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within an AuthProvider')
  return ctx
}
