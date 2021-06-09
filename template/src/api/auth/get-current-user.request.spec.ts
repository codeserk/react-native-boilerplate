import { http } from '../http'
import { getCurrentUser } from './get-current-user.request'
import getCurrentUserMock from './mocks/get-current-user.mock.json'

jest.mock('../../config.ts', () => ({
  config: {
    api: {
      baseUrl: 'test',
    },
  },
}))

describe('auth / get current user request', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should ge the current user from the jwt authentication', async () => {
    // Arrange
    jest.spyOn(http, 'get').mockImplementation(async () => getCurrentUserMock)

    // Act
    const user = await getCurrentUser()

    // Assert
    expect(user).toMatchInlineSnapshot()
  })

  test('should throw an error if the api throws an error', async () => {
    // Arrange
    jest.spyOn(http, 'get').mockRejectedValue(new Error('boom'))

    // Assert
    await expect(getCurrentUser()).rejects.toMatchInlineSnapshot(`[Error: boom]`)
  })

  test('should throw an error if the api returns 200 but the user is incorrect (missing _id)', async () => {
    // Arrange
    jest.spyOn(http, 'get').mockReturnValue(
      Promise.resolve({
        data: {
          invalid: true,
        },
      }),
    )

    // Assert
    await expect(getCurrentUser()).rejects.toMatchInlineSnapshot(`[Error: Unauthenticated]`)
  })
})
