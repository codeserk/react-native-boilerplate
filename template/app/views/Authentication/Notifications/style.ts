import { StyleSheet } from 'react-native'

import { Fonts } from '~/assets/theme/fonts'

export const styles = StyleSheet.create({
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
