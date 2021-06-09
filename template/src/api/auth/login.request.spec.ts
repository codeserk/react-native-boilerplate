import { http } from '../http'
import { login } from './login.request'
import loginMock from './mocks/login.mock.json'

jest.mock('../../config.ts', () => ({
  config: {
    api: {
      baseUrl: 'test',
    },
  },
}))

describe('auth / login request', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should get the jwt and user transformed', async () => {
    // Arrange
    jest.spyOn(http, 'post').mockImplementation(async () => loginMock)

    // Act
    const response = await login('username', 'password')

    // Assert
    expect(response).toMatchInlineSnapshot()
  })

  test('should throw an error if the api throws an error', async () => {
    // Arrange
    jest.spyOn(http, 'post').mockRejectedValue(new Error('boom'))

    // Assert
    await expect(login('username', 'password')).rejects.toMatchInlineSnapshot(`[Error: boom]`)
  })

  test('should throw an error if the api returns 200 but the user is incorrect (missing _id)', async () => {
    // Arrange
    jest.spyOn(http, 'post').mockReturnValue(
      Promise.resolve({
        data: {
          invalid: true,
        },
      }),
    )

    // Assert
    await expect(login('username', 'password')).rejects.toMatchInlineSnapshot(
      `[Error: Unauthenticated]`,
    )
  })
})
