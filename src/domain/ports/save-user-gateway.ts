import { HttpClient } from './http-client'

namespace SaveUserGateway {
  export type Input = {
    age: number
    document: string
    email: string
    name: string
    password: string
  }
  export type Output = {
    data: {
      token: string
    }
    statusCode: number
  }
}

export type SaveUser = (
  input: SaveUserGateway.Input
) => Promise<SaveUserGateway.Output>
export type SaveUserGateway = (url: string, httpClient: HttpClient) => SaveUser
export type User = { save: SaveUser }
export type UserGateway = (url?: string) => User
