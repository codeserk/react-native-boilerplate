import { User } from '../../interfaces/user.interface'
import { wait } from '../../utils/time'
import { http } from '../http'
import { transformUser } from '../transformers/user.transformer'

export interface LoginResponse {
  readonly user: Readonly<User>
  readonly jwt: string
}

/**
 * Tries to login using username and password
 * @param email
 * @param password
 * @throws error when the user is not authenticated
 * @returns logged in user
 *
 * @todo Implement this endpoint
 */
export async function login(email: string, password: string): Promise<LoginResponse> {
  await wait(1)
  const response = { data: {} } as any
  // const response = await http.post('/authentications/signin', { email, password })

  if (!response.data?.user || !response.data?.token) {
    throw new Error('Unauthenticated')
  }
  const user = transformUser(response.data.user)
  const jwt = response.data.token

  return { user, jwt }
}
