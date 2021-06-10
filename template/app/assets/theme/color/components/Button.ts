import { Color } from '../color'

export const ButtonColor = {
  container: Color.black,
  text: Color.white,
  link: Color.black,

  invert: {
    container: Color.white,
    border: Color.black,
    text: Color.black,
  },
  invertSubtle: {
    container: Color.white,
    border: Color.lightGrey,
    text: '#8F8F8F',
  },

  disabled: {
    container: Color.grey,
    text: Color.white,
  },

  danger: {
    container: Color.white,
    border: Color.error,
    text: Color.error,
  },

  dangerLink: {
    text: Color.error,
  },

  grey: {
    container: Color.lightGrey,
    text: Color.black,
  },
}
