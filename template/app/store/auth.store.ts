import { createContext, useEffect, useState } from 'react'

import { authAPI } from '../api/auth'
import { configureJWT } from '../api/http'
import { User } from '../interfaces/user.interface'
import { PreferencesStore } from './preferences.store'

/**
 * Store responsible for the authentication
 * @param preferences
 * @returns
 */
export function useAuthStore(preferences: PreferencesStore) {
  // State
  const [isInitialized, setIsInitialized] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [jwt, setJWT] = useState<string | null>(null)
  const [hasSeenNotificationsView, setHasSeenNotificationsView] = useState(false)

  // Getters
  const isAuthenticated = !!user && !!jwt

  // Actions
  /**
   * Initializes the store. Tries to get the current user if three is a saved JWT.
   * If so, saves the new JWT.
   */
  async function init() {
    setLoading(true)

    // Load whether the user has seen notifications screen
    setHasSeenNotificationsView(await preferences.getHasSeenEnableNotificationsView())

    const currentJWT = await preferences.getJWT()
    if (!currentJWT) {
      setLoading(false)
      return setIsInitialized(true)
    }

    try {
      setJWT(currentJWT)
      configureJWT(currentJWT)
      const currentUser = await authAPI.getCurrentUser()

      setUser(currentUser)
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
    setIsInitialized(true)
  }

  /**
   * Login using username and password.
   * @param username
   * @param password
   * @returns whether it was possible to login or not.
   */
  async function login(username: string, password: string): Promise<boolean> {
    setLoading(true)

    try {
      const response = await authAPI.login(username, password)

      setUser(response.user)
      setJWT(response.jwt)
      configureJWT(response.jwt)
      preferences.setJWT(response.jwt)
      return true
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }

    return false
  }

  /**
   * Logs out the current user
   */
  async function logout() {
    setJWT(null)
    setUser(null)
    configureJWT('')
    preferences.removeJWT()
  }

  useEffect(() => {
    init()
  }, [])

  return {
    user,
    jwt,
    isInitialized,
    isLoading,

    hasSeenNotificationsView,
    isAuthenticated,

    setUser,
    login,
    logout,
  }
}

export type AuthStore = ReturnType<typeof useAuthStore>

export const AuthStoreContext = createContext<AuthStore>(null as any)
