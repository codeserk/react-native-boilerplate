import { TypedNavigator } from '@react-navigation/core'
import React from 'react'

import { NotificationsView } from '../views/Authentication/Notifications'
import { SignInView } from '../views/Authentication/SignIn'

export interface AuthenticatedStackProps {
  hasSeenNotificationsView?: boolean
}

/**
 * Stack shown when the user is authenticated. Nothing to see here yet.
 */
export function AuthenticatedStack(
  Stack: TypedNavigator<any, any, any, any, any>,
  options: AuthenticatedStackProps,
) {
  return (
    <>
      {!options.hasSeenNotificationsView && (
        <Stack.Screen
          name="EnableNotifications"
          component={NotificationsView}
          options={{ headerShown: false }}
        />
      )}

      <Stack.Screen name="SignIn" component={SignInView} options={{ headerShown: false }} />
    </>
  )
}
