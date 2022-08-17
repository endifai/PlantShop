import { Button, Text, View } from 'react-native'

import { useAuth } from 'src/context/auth'

export const SignInScreen = () => {
  const { login } = useAuth()

  return (
    <View>
      <Text>Sign in screen</Text>

      <Button title="Login" onPress={login} />
    </View>
  )
}
