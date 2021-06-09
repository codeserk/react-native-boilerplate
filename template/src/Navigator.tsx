import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { Platform } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Fonts } from './constants'
import { EnableNotificationsScreen } from './screens/auth/EnableNotificationsScreen'
import { SplashScreen } from './screens/SplashScreen'
import { AuthStoreContext } from './store/auth.store'


/**
 * Screens available when the app is loading
 */
function LoadingScreens() {
  return (
    <>
      <Stack.Screen name="Loading" component={SplashScreen} options={{ headerShown: false }} />
    </>
  )
}

/**
 * Screens available when the user is not authenticated
 */
function UnauthenticatedScreens() {
  return (
    <>
      <Stack.Screen name="Loading" component={SplashScreen} options={{ headerShown: false }} />
    </>
  )
}

interface AuthenticatedScreensProps {
  hasSeenEnableNotificationsScreen?: boolean
}

/**
 * Screens available when the user is authenticated
 */
function AuthenticatedScreens({ hasSeenEnableNotificationsScreen }: AuthenticatedScreensProps) {
  return (
    <>
      {!hasSeenEnableNotificationsScreen && (
        <Stack.Screen
          name="EnableNotifications"
          component={EnableNotificationsScreen}
          options={{ headerShown: false }}
        />
      )}

      <Stack.Screen name="Loading" component={SplashScreen} options={{ headerShown: false }} />
    </>
  )
}

const Stack = createStackNavigator()

/**
 * App navigator
 */
export function Navigator() {
  const { t } = useTranslation()
  const { isInitialized, isAuthenticated, hasSeenNotificationsScreen } = useContext(AuthStoreContext)

  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator>
        {!isInitialized && <LoadingScreens />}

        {isInitialized && !isAuthenticated && <UnauthenticatedScreens />}

        {isInitialized &&
          isAuthenticated &&
          <AuthenticatedScreens hasSeenEnableNotificationsScreen={hasSeenNotificationsScreen} />}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// Styles

const appTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 255, 255)',
    card: 'rgb(255, 255, 255)',
    background: 'rgb(255, 255, 255)',
  },
}

const headerStyle: any = {
  headerTitleStyle: {
    alignSelf: 'center',
    marginLeft: Platform.OS === 'android' ? -50 : 0,
    fontFamily: Fonts.Bold,
    fontSize: 15,
    textTransform: 'uppercase',
  },
  headerBackImage: () => (
    <Icon
      name="chevron-left"
      size={24}
      style={{ marginLeft: Platform.OS === 'android' ? 0 : 10 }}
    />
  ),
}
