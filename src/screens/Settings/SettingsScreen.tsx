import { Button, Text, View } from 'react-native'
import { useTheme } from 'styled-components/native'

import { useAuth } from 'src/context/auth'

export const SettingsScreen = () => {
  const { logout } = useAuth()
  const theme = useTheme()

  return (
    <View>
      <Text>Settings Screen</Text>

      <Button title="Logout" color={theme.colors.red[600]} onPress={logout} />
    </View>
  )
}
