import { User } from '../../interfaces/user.interface'
import { http } from '../http'
import { transformUser } from '../transformers/user.transformer'

/**
 * Gets the current user from the authentication mechanism.
 * @throws error when the user is not authenticated
 * @returns logged in user
 */
export async function getCurrentUser(): Promise<Readonly<User>> {
  const response = await http.get('users')
  if (!response.data?._id) {
    throw new Error('Unauthenticated')
  }

  return transformUser(response.data)
}
