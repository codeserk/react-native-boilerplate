import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext } from 'react'

import { AppTheme } from '../assets/theme/common'
import { AuthenticatedStack } from '../stacks/Authenticated'
import { GuestStack } from '../stacks/Guest'
import { LoadingStack } from '../stacks/Loading'
import { AuthStoreContext } from '../store/auth.store'

const Stack = createStackNavigator()

/**
 * App navigator
 */
export function Navigator() {
  const { isInitialized, isAuthenticated, hasSeenNotificationsView } = useContext(AuthStoreContext)

  let stack
  if (!isInitialized) {
    stack = LoadingStack(Stack)
  } else {
    stack = isAuthenticated
      ? AuthenticatedStack(Stack, { hasSeenNotificationsView })
      : GuestStack(Stack)
  }

  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator>{stack}</Stack.Navigator>
    </NavigationContainer>
  )
}
