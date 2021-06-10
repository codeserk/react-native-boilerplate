import validator from 'validator'

const USERNAME_REGEX = /^[a-zA-Z0-9._-]+$/

/**
 * Validates whether a username is correct or not
 * @param username
 */
export function validateUsername(username: string): boolean {
  return USERNAME_REGEX.test(username)
}

/**
 * Validates whether an email is correct or not
 * @param email
 */
export function validateEmail(email: string): boolean {
  return validator.isEmail(email)
}

/**
 * Validates whether the incoming text represents a valid URL
 * @param url
 */
export function validateUrl(url: string) {
  return validator.isURL(url)
}

/**
 * Validates whether the incoming text is a valid phone
 * @param phone
 */
export function validatePhone(phone: string) {
  return validator.isMobilePhone(phone)
}
