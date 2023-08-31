import { AggregateRoot } from 'domain/common'
import { AgeNotAllowed } from 'domain/errors'

type Props = {
  age: number
  document: string
  email: string
  name: string
  password: string
}

export class User extends AggregateRoot {
  private constructor(private readonly _props: Props) {
    super()
  }

  static create({ ...props }: Props): User & Props {
    const user = new User(props)
    Object.assign(user._props, props)
    user.#validate(user._props)
    user.movePrivateKeys()
    user.removePrivateKeys()
    return user as User & Props
  }

  #validate({ age }: Props): void {
    if (age < 18) throw new AgeNotAllowed()
  }
}
