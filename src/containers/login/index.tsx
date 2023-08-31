import { AddUserUseCase } from 'domain/ports'
import { FormEvent } from 'react'

type Props = {
  addUser: AddUserUseCase
}

type Input = {
  age: HTMLInputElement
  document: HTMLInputElement
  email: HTMLInputElement
  name: HTMLInputElement
  password: HTMLInputElement
}

export const Login = ({ addUser }: Props) => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { name, email, document, password, age } =
      event.target as unknown as Input
    const payload = {
      age: Number(age.value),
      document: document.value,
      email: email.value,
      name: name.value,
      password: password.value
    }
    addUser(payload)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <br />
      <input id="name" name="name" type="text" />
      <br />
      <label htmlFor="email">Email:</label>
      <br />
      <input id="email" name="email" type="email" />
      <br />
      <label htmlFor="document">Document:</label>
      <br />
      <input id="document" name="document" type="number" />
      <br />
      <label htmlFor="password">Password:</label>
      <br />
      <input id="password" name="password" type="password" />
      <br />
      <label htmlFor="age">Age:</label>
      <br />
      <input id="age" name="age" type="number" />
      <br />
      <button type="submit">Cadastrar-se</button>
    </form>
  )
}
