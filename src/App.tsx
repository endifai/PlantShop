import 'src/i18n'

import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from 'styled-components'

import { AuthProvider } from 'src/context/auth'

import { RootNavigator } from './navigation'
import { AppTheme } from './theme'

export const App = () => (
  <NavigationContainer>
    <ThemeProvider theme={AppTheme}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </ThemeProvider>
  </NavigationContainer>
)
