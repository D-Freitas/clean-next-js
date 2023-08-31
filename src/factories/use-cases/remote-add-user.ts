import { AddUserUseCase } from 'domain/ports'
import { remoteAddUser } from 'domain/use-cases'
import { userGatewayAdapter } from 'factories/infra'

const makeUserGatewayAdapter = userGatewayAdapter()

export const makeRemoteAddUser = (): AddUserUseCase => {
  return remoteAddUser(makeUserGatewayAdapter.save)
}
