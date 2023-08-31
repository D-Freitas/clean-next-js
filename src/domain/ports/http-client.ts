namespace HttpClient {
  export type Input<T = any> = {
    url: string
    headers?: HeadersInit
    method?: string
    payload?: T
  }
  export type Output<T = any> = {
    data: T
    statusCode: number
  }
}
export type HttpClient = (input: HttpClient.Input) => Promise<HttpClient.Output>
