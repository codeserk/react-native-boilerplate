import { StyleSheet } from 'react-native'

import { ButtonColor } from '~/assets/theme/color/components/Button'
import { deviceWidth } from '~/utils/dimensions'

import { ButtonType } from '../../interfaces/button.interface'

const buttonStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ButtonColor.container,
    borderRadius: 20,
    width: deviceWidth - 70,
    height: 57,
    justifyContent: 'center',
  },
  containerSmall: {
    borderRadius: 10,
    height: 41,
  },
  containerBig: {
    borderRadius: 15,
    height: 86,
  },
  containerFit: {
    flex: 1,
    width: null as any,
    marginHorizontal: 10,
  },

  text: {
    fontSize: 18,
    lineHeight: 27,
    alignSelf: 'center',
    textAlign: 'center',
    color: ButtonColor.text,
    opacity: 1,
  },
  textSmall: {
    fontSize: 13,
    lineHeight: 21,
  },

  loader: {
    position: 'absolute',
    right: 15,
  },
  loaderSmall: {
    right: 8,
  },
})

const linkStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center',
    color: ButtonColor.link,
    opacity: 1,
    textDecorationLine: 'underline',
  },
  textSmall: {
    fontSize: 13,
  },

  loader: {
    position: 'absolute',
    right: 18,
  },
})

export const styles: Record<ButtonType, StyleSheet.NamedStyles<any>> = {
  [ButtonType.Normal]: buttonStyles,

  [ButtonType.Invert]: StyleSheet.create({
    ...buttonStyles,

    container: {
      ...buttonStyles.container,
      backgroundColor: ButtonColor.invert.container,
      borderColor: ButtonColor.invert.border,
      borderWidth: 1,
    },

    text: {
      ...buttonStyles.text,
      color: ButtonColor.invert.text,
    },
  }),

  [ButtonType.InvertSubtle]: StyleSheet.create({
    ...buttonStyles,

    container: {
      ...buttonStyles.container,
      backgroundColor: ButtonColor.invertSubtle.container,
      borderColor: ButtonColor.invertSubtle.border,
      borderWidth: 1,
    },

    text: {
      ...buttonStyles.text,
      color: ButtonColor.invertSubtle.text,
      fontSize: 16,
    },
  }),

  [ButtonType.Disabled]: StyleSheet.create({
    ...buttonStyles,

    container: {
      ...buttonStyles.container,
      backgroundColor: ButtonColor.disabled.container,
    },

    text: {
      ...buttonStyles.text,
      color: ButtonColor.disabled.text,
    },
  }),

  [ButtonType.Danger]: StyleSheet.create({
    ...buttonStyles,

    container: {
      ...buttonStyles.container,
      backgroundColor: ButtonColor.danger.container,
      borderColor: ButtonColor.danger.border,
      borderWidth: 1,
    },

    text: {
      ...buttonStyles.text,
      color: ButtonColor.danger.text,
    },
  }),

  [ButtonType.Grey]: StyleSheet.create({
    ...buttonStyles,

    container: {
      ...buttonStyles.container,
      backgroundColor: ButtonColor.grey.container,
    },

    text: {
      ...buttonStyles.text,
      color: ButtonColor.grey.text,
      fontWeight: 'bold',
    },
  }),

  [ButtonType.Link]: linkStyles,

  [ButtonType.DangerLink]: StyleSheet.create({
    ...linkStyles,
    text: {
      ...linkStyles.text,
      color: ButtonColor.dangerLink.text,
    },
  }),
}
