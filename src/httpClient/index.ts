import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

export class HttpClient {
  axiosInstance: AxiosInstance

  constructor(baseURL = '') {
    this.axiosInstance = axios.create({ baseURL })

    this.axiosInstance.interceptors.request.use(
      async (config: AxiosRequestConfig) => {
        return config
      },
      (err: AxiosError) => {
        return Promise.reject(err)
      },
    )
  }

  async get<T>(path: string, params = {}): Promise<T> {
    return await this.axiosInstance
      .get(path, { params })
      .then((res) => res.data)
      .catch((err) => {
        console.error(err)
        return null
      })
  }
}
