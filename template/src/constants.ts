import { StyleSheet } from 'react-native'

// Colors
export const Colors = {
  white: 'white',
  black: 'black',

  heading: '#5E5873',
  subheading: '#6E6B7B',

  disabled: 'rgba(0, 0, 0, 0.1608)',
  lighterGrey: '#D4D4D4',
  lightGrey: '#EDEDED',
  grey: '#B9B9B9',
  darkGrey: '#727272',
  darkerGrey: '#939393',
  darkestGrey: '#1F1F1F',

  warning: '#FFC041',
  success: '#28C76F',
  danger: '#CE0000',
  dangerLight: '#EB5757',
}

// Fonts
export const Fonts = {
  Regular: 'Poppins-Regular',
  Bold: 'Poppins-Bold',
}

export const commonStyles = StyleSheet.create({
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
