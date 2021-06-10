import Storage from '@react-native-async-storage/async-storage'
import { createContext } from 'react'

enum Keys {
  JWT = 'jwt',

  // Whether the user has seen the screen to enable notifications
  SeenEnableNotifications = 'seen-enable-notifications',
}

export function usePreferencesStore() {
  /**
   * Gets the JWT if present
   * @returns JWT if present
   */
  async function getJWT(): Promise<string | undefined> {
    return (await Storage.getItem(Keys.JWT)) ?? undefined
  }

  /**
   * Saves the JWT in the storage
   * @param jwt
   */
  async function setJWT(jwt: string) {
    await Storage.setItem(Keys.JWT, jwt)
  }

  /**
   * Removes the JWT
   */
  async function removeJWT() {
    await Storage.removeItem(Keys.JWT)
  }

  /**
   * Gets whether the user has seen the screen to enable push notifications
   */
  async function getHasSeenEnableNotificationsScreen(): Promise<boolean> {
    const value = await Storage.getItem(Keys.SeenEnableNotifications)
    if (value) {
      return value === 'true'
    }

    return false
  }

  /**
   * Saves the fact that the user has seen the screen to enable push notifications
   */
  async function setHasSeenEnableNotificationsScreen() {
    await Storage.setItem(Keys.SeenEnableNotifications, 'true')
  }

  return {
    // JWT
    getJWT,
    setJWT,
    removeJWT,

    // Seen
    getHasSeenEnableNotificationsScreen,
    setHasSeenEnableNotificationsScreen,
  }
}

export type PreferencesStore = ReturnType<typeof usePreferencesStore>

export const PreferencesStoreContext = createContext<PreferencesStore>(null as any)
