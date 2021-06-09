import axios, { AxiosRequestConfig } from 'axios'

import { config } from '../config'

/** Http instance. */
export let http = axios.create({
  baseURL: config.api.baseUrl,
})

/** JWT http  header */
const JWT_HEADER = 'Authorization'

/**
 * Modifies the http to start using the given jwt
 * @param jwt
 */
export function configureJWT(jwt: string) {
  http = axios.create({
    baseURL: config.api.baseUrl,
  })

  http.interceptors.request.use(
    (axiosConfig: AxiosRequestConfig): AxiosRequestConfig => {
      if (!axiosConfig.headers) {
        axiosConfig.headers = {}
      }

      axiosConfig.headers[JWT_HEADER] = `Bearer ${jwt}`

      return axiosConfig
    },
  )
}
