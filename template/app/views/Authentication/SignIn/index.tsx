import React, { useContext, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

import { Button } from '~/components/Button'
import { Textbox } from '~/components/Textbox'
import { validateEmail } from '~/helpers/validations'
import { AuthStoreContext } from '~/store/auth.store'

import { ButtonType } from '../../../interfaces/button.interface'
import { styles } from './style'

/**
 * Sign in view
 */
export function SignInView() {
  const { t } = useTranslation()

  const { isLoading, login } = useContext(AuthStoreContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [serverError, setServerError] = useState<string | undefined>()

  // Errors
  const isEmailValid = useMemo(() => validateEmail(email), [email])
  const isPasswordValid = useMemo(() => password.length > 0, [password])
  const isValid = useMemo(
    () => !serverError && isEmailValid && isPasswordValid,
    [serverError, isEmailValid, isPasswordValid],
  )
  const passwordError = useMemo(() => {
    if (serverError) {
      return serverError
    }
    if (!isPasswordValid) {
      return t('authentication.signIn.errors.password')
    }
  }, [serverError, isPasswordValid])

  function onEmailChanged(newEmail: string) {
    setServerError(undefined)
    setEmail(newEmail)
  }
  function onPasswordChanged(newPassword: string) {
    setServerError(undefined)
    setPassword(newPassword)
  }

  async function submit() {
    const didLogin = await login(email, password)
    if (!didLogin) {
      setServerError(t('authentication.signIn.errors.login'))
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>{t('authentication.signIn.title')}</Text>
          <Text style={styles.subtitle}>{t('authentication.signIn.subtitle')}</Text>
        </View>

        <View style={styles.body}>
          <Textbox
            placeholder={t('authentication.signIn.email')}
            icon={isEmailValid ? 'check' : undefined}
            value={email}
            onInput={onEmailChanged}
            keyboardType="email-address"
            autoCapitalize="none"
            error={!isEmailValid ? t('authentication.signIn.errors.email') : undefined}
          />
          <Textbox
            placeholder={t('authentication.signIn.password')}
            value={password}
            onInput={onPasswordChanged}
            secureTextEntry={true}
            isPassword={true}
            error={passwordError}
          />

          <Button
            onPress={submit}
            label={t('authentication.signIn.submit')}
            isLoading={isLoading}
            type={!isValid ? ButtonType.Disabled : ButtonType.Normal}
            disabled={!isValid || isLoading}
            withMargin
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
