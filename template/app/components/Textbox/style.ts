import { StyleSheet } from 'react-native'

import { TextboxColor } from '~/assets/theme/color/components/Textbox'
import { deviceWidth } from '~/utils/dimensions'

export const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 24,
    alignItems: 'flex-start',
    width: deviceWidth - 70,
    marginHorizontal: 35,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: TextboxColor.container,
    borderWidth: 1,
    borderRadius: 20,
    height: 59,
  },
  containerSmall: {
    height: 41,
  },
  containerFocused: {
    borderColor: TextboxColor.containerFocused,
  },
  containerMultiline: {
    paddingTop: 12,
    height: 150,
    alignItems: 'flex-start',
  },

  input: {
    color: TextboxColor.input,
    paddingHorizontal: 32,
    paddingRight: 32 + 18,
    flex: 1,
  },
  inputError: {
    color: TextboxColor.inputError,
  },
  inputMultiline: {
    textAlignVertical: 'top',
  },

  iconContainer: {
    position: 'absolute',
    top: 16,
    right: 14,
    margin: 0,
    bottom: 5,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainerWithBorder: {
    backgroundColor: TextboxColor.icon.container,
    borderRadius: 24,
  },
  icon: {
    fontSize: 12,
    color: TextboxColor.icon.default,
  },
  iconBlack: {
    color: TextboxColor.icon.black,
  },
  iconGrey: {
    color: TextboxColor.icon.grey,
  },
  iconBig: {
    fontSize: 24,
  },

  error: {
    color: TextboxColor.error,
    marginTop: 6,
    marginLeft: 10,
  },

  maxLength: {
    position: 'absolute',
    bottom: 8,
    right: 14,
    fontSize: 13,
    color: TextboxColor.maxLength,
  },
})
