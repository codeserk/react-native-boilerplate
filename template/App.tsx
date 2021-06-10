import i18n from 'i18next'
import React from 'react'
import { initReactI18next } from 'react-i18next'
import { StatusBar } from 'react-native'
import FlashMessage from 'react-native-flash-message'

import { resources } from './app/helpers/locale/config'
import { Navigator } from './app/Navigator'
import { AuthStoreContext, useAuthStore } from './app/store/auth.store'
import { PreferencesStoreContext, usePreferencesStore } from './app/store/preferences.store'
import { setDefaultFont } from './app/util/font'
import { setupMoment } from './app/util/moment'
import { Compose } from './app/util/store'

i18n.use(initReactI18next).init({
  lng: 'fr',
  resources,
})

setDefaultFont()
setupMoment()

const App = () => {
  const preferences = usePreferencesStore()
  const auth = useAuthStore(preferences)

  return (
    <Compose
      components={[
        [PreferencesStoreContext.Provider, { value: preferences }],
        [AuthStoreContext.Provider, { value: auth }],
      ]}>
      <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />

      <Navigator />

      <FlashMessage position="top" />
    </Compose>
  )
}

export default App
