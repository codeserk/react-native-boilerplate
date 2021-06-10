import { StyleSheet } from 'react-native'

import { Fonts } from '~/assets/theme/fonts'

import { SignInColor } from '../../../assets/theme/color/views/Authentication/Signin'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.3,
    marginTop: 20,
    marginBottom: 32,
  },
  title: {
    fontFamily: Fonts.Bold,
    fontSize: 17,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 20,
    marginTop: 50,
  },
  subtitle: {
    fontFamily: Fonts.Regular,
    fontWeight: '600',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 50,
    color: SignInColor.subtitle,
    lineHeight: 20,
  },
  body: {
    margin: 15,
    alignItems: 'center',
  },
})
