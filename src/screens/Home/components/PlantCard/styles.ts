import { Dimensions, Image, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

const CARD_WIDTH = (Dimensions.get('window').width - 48) * 0.46
const IMAGE_HEIGHT = (12 * CARD_WIDTH) / 9

export const Container = styled(TouchableOpacity)`
  width: ${CARD_WIDTH}px;
  margin-bottom: 16px;
`

export const Preview = styled(Image)`
  width: 100%;
  height: ${IMAGE_HEIGHT}px;
  border-radius: 16px;
`

export const Name = styled(Text)`
  font-size: 16px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fontFamily.title};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 4px;
`

export const Price = styled(Text)`
  font-size: 14px;
  line-height: 18px;
  font-family: ${({ theme }) => theme.fontFamily.title};
  color: ${({ theme }) => theme.colors.price};
`
