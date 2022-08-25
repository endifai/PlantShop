import { ReactNode } from 'react'
import { View } from 'react-native'
import { useTheme } from 'styled-components/native'

interface Props {
  children: ReactNode | ReactNode[]
}

export const Layout = ({ children }: Props) => {
  const theme = useTheme()

  const style = { backgroundColor: theme.colors.background }

  return <View style={style}>{children}</View>
}
