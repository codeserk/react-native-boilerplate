import { TypedNavigator } from '@react-navigation/core'
import React from 'react'

import { SignInView } from '../views/Authentication/SignIn'

/**
 * Stack used when the user is not authenticated. Shows ways to authenticate.
 */
export function GuestStack(Stack: TypedNavigator<any, any, any, any, any>) {
  return (
    <>
      <Stack.Screen name="SignIn" component={SignInView} options={{ headerShown: false }} />
    </>
  )
}
