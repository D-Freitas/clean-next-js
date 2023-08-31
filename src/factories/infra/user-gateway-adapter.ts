import { UserGateway } from 'domain/ports'
import { httpClientAdapter, saveUserGatewayAdapter } from 'infra'

export const userGatewayAdapter: UserGateway = (
  url = 'http://localhost:3000/api/user'
) => {
  return {
    save: saveUserGatewayAdapter(url, httpClientAdapter)
  }
}
