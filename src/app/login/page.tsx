'use client'

import { Login } from 'containers/login'
import { makeRemoteAddUser } from 'factories/use-cases'

const LoginPage = () => <Login addUser={makeRemoteAddUser()} />
export default LoginPage
