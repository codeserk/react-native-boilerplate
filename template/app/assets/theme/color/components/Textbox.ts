import { Color } from '../color'

export const TextboxColor = {
  container: Color.lightGrey,
  containerFocused: Color.black,

  input: Color.black,
  inputError: Color.error,

  placeholder: {
    default: Color.grey,
    focused: Color.black,
    error: Color.error,
  },

  icon: {
    container: Color.black,
    default: Color.white,
    black: Color.black,
    grey: Color.lightGrey,
  },

  error: Color.error,
  maxLength: Color.grey,
}
