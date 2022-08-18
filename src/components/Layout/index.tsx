import { ReactNode } from 'react'
import { ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useTheme } from 'styled-components/native'

interface Props {
  children: ReactNode | ReactNode[]
}

export const Layout = ({ children }: Props) => {
  const theme = useTheme()
  const { top } = useSafeAreaInsets()

  const style = { backgroundColor: theme.colors.background, paddingTop: top }

  return <ScrollView style={style}>{children}</ScrollView>
}
