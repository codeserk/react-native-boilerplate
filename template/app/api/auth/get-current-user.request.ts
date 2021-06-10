import { User } from '../../interfaces/user.interface'
import { wait } from '../../utils/time'
import { http } from '../http'
import { transformUser } from '../transformers/user.transformer'

/**
 * Gets the current user from the authentication mechanism.
 * @throws error when the user is not authenticated
 * @returns logged in user
 *
 * @todo Implement this request
 */
export async function getCurrentUser(): Promise<Readonly<User>> {
  await wait(1)

  const response = { data: {} } as any
  // const response = await http.get('users')

  if (!response.data?._id) {
    throw new Error('Unauthenticated')
  }

  return transformUser(response.data)
}
