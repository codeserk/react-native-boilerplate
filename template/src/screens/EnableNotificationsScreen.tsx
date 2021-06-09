import { useNavigation } from '@react-navigation/core'
import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SvgXml } from 'react-native-svg'

import NotificationsImage from '../../../assets/img/notifications.svg'
import { Button, ButtonType } from '../../components/Button'
import { Fonts } from '../../constants'
import { AuthStoreContext } from '../../store/auth.store'
import { PreferencesStoreContext } from '../../store/preferences.store'
import { deviceWidth } from '../../util/dimensions'

/**
 * Enable notifications screen
 * @TODO Actually enable the notifications if needed
 */
export function EnableNotificationsScreen() {
  const { t } = useTranslation()
  const { navigate } = useNavigation()
  const { setHasSeenEnableNotificationsScreen } = useContext(PreferencesStoreContext)
  const { isLoading } = useContext(AuthStoreContext)!

  useEffect(() => {
    setHasSeenEnableNotificationsScreen()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>{t('notifications.title')}</Text>
        </View>

        <SvgXml xml={NotificationsImage} width={deviceWidth} style={styles.image} />

        <View style={styles.body}>
          <Button
            onPress={() => navigate('Profile')}
            label={t('notifications.enable')}
            isLoading={isLoading}
            disabled={isLoading}
            withMargin
          />

          <Button
            onPress={() => navigate('Profile')}
            label={t('pass')}
            type={ButtonType.Link}
            disabled={isLoading}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

// Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 22,
  },
  title: {
    width: 189,
    textAlign: 'center',
    fontFamily: Fonts.Bold,
    fontSize: 17,
    fontWeight: '700',
    textTransform: 'uppercase',
  },

  image: {
    alignSelf: 'center',
    marginBottom: -75,
  },

  body: {
    alignItems: 'center',
  },
})
