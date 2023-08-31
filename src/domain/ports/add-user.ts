import { SaveUser } from 'domain/ports'

namespace AddUser {
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

export type AddUserUseCase = (input: AddUser.Input) => Promise<AddUser.Output>
export type AddUser = (userGateway: SaveUser) => AddUserUseCase
