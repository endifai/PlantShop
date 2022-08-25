import { AppTheme } from './src/theme'

type CustomTheme = typeof AppTheme

declare module 'styled-components/native' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}

declare module 'react-native-config' {
  export interface NativeConfig {
    API_URL: string
  }
  export const Config: NativeConfig
  export default Config
}
