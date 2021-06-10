import { DefaultTheme } from '@react-navigation/native'
import { StyleSheet } from 'react-native'

import { Color } from './color/color'

export const CommonStyles = StyleSheet.create({
  /** Style to separate a component to the next below  */
  separationBottom: { marginBottom: 15 },

  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  selfCenter: {
    alignSelf: 'center',
  },
})

export const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Color.white,
    card: Color.white,
    background: Color.white,
  },
}
