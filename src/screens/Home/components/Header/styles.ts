import { Text } from 'react-native'
import styled from 'styled-components'

export const Title = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontFamily.title};
  padding: 0px 24px;
  margin-bottom: 16px;
`
