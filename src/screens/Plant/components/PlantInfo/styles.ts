import { Text, View } from 'react-native'
import styled from 'styled-components'

import { IMAGE_HEIGHT } from '../../constants'

export const Container = styled(View)`
  margin-top: ${IMAGE_HEIGHT - 32}px;
  padding: 24px;
  border-radius: 32px;
  background-color: ${({ theme }) => theme.colors.white};
  height: 100%;
  flex: 1;
`

export const Name = styled(Text)`
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.title};
`

export const Price = styled(Text)`
  font-size: 20px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.price};
  font-family: ${({ theme }) => theme.fontFamily.title};
  margin-bottom: 12px;
`

export const DescriptionWrapper = styled(View)`
  flex: 1;
`

export const Description = styled(Text)`
  font-size: 16px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.description};
  font-family: ${({ theme }) => theme.fontFamily.text};
`

export const DescriptionTitle = styled(Description)`
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 8px;
`
