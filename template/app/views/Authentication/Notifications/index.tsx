import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SvgXml } from 'react-native-svg'

import NotificationsImage from '~/assets/images/notifications.svg'
import { PreferencesStoreContext } from '~/store/preferences.store'
import { deviceWidth } from '~/utils/dimensions'

import { styles } from './style'

/**
 * Enable notifications screen
 * @TODO Actually enable the notifications if needed
 */
export function NotificationsView() {
  const { t } = useTranslation()
  const { setHasSeenEnableNotificationsView } = useContext(PreferencesStoreContext)

  useEffect(() => {
    setHasSeenEnableNotificationsView()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>{t('notifications.title')}</Text>
        </View>

        <SvgXml xml={NotificationsImage} width={deviceWidth} style={styles.image} />

        <View style={styles.body} />
      </ScrollView>
    </SafeAreaView>
  )
}
