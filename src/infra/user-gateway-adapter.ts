import { SaveUserGateway } from 'domain/ports'

export const saveUserGatewayAdapter: SaveUserGateway =
  (url, httpClient) => async input => {
    const output = await httpClient({
      method: 'POST',
      payload: input,
      url
    })
    return output
  }
