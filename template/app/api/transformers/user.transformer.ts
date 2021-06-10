import { User } from '../../interfaces/user.interface'

/**
 * Transforms the user coming from the API to the user described in the interface
 * @param user
 */
export function transformUser(user: any): User {
  return {
    id: user._id,
    username: user.username,
    email: user.email,
  }
}
