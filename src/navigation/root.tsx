import { ReactElement } from 'react'

import { useAuth } from 'src/context/auth'

import { AuthNavigator } from './auth'
import { MainNavigator } from './main'

export const RootNavigator = (): ReactElement => {
  const { isLoggedIn } = useAuth()

  return isLoggedIn ? <MainNavigator /> : <AuthNavigator />
}
