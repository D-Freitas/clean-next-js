import { User } from 'domain/entities/user'
import { AddUser } from 'domain/ports'

export const remoteAddUser: AddUser = saveUserGateway => async input => {
  const user = User.create(input)
  const output = await saveUserGateway(user)
  return output
}
