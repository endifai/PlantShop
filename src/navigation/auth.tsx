import { ReactElement } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { SignInScreen } from 'src/screens/SignIn'

import { RoutesEnum } from './routes'

export type AuthStackParamList = {
  [RoutesEnum.SIGN_IN]: undefined
}

const Stack = createNativeStackNavigator<AuthStackParamList>()

export const AuthNavigator = (): ReactElement => (
  <Stack.Navigator>
    <Stack.Screen name={RoutesEnum.SIGN_IN} component={SignInScreen} />
  </Stack.Navigator>
)
