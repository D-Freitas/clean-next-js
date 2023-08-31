import { HttpClient } from 'domain/ports'

export const httpClientAdapter: HttpClient = async ({
  method = 'GET',
  headers,
  payload,
  url
}) => {
  const options = {
    headers: headers ?? {
      'Content-Type': 'application/json'
    },
    method
  }
  const response = await fetch(
    url,
    method === 'GET'
      ? structuredClone(options)
      : { ...structuredClone(options), body: JSON.stringify(payload) }
  )
  const data = await response.json()
  return {
    data,
    statusCode: response.status
  }
}
