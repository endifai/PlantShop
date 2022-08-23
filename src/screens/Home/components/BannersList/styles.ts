import { Image, Text, View } from 'react-native'
import styled, { css } from 'styled-components'

export const Container = styled(View)<{ color: string; isFirst: boolean }>`
  flex-direction: row;
  margin-right: 24px;
  ${({ isFirst }) =>
    isFirst &&
    css`
      margin-left: 24px;
    `}
  padding: 16px;
  max-width: 320px;
  border-radius: 16px;
  background-color: ${({ color }) => color};
`

export const BannerImage = styled(Image)`
  width: 100%;
  height: 100%;
`

export const Content = styled(View)`
  width: 70%;
`

export const ImageContainer = styled(View)`
  width: 30%;
`

export const Description = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-family: ${({ theme }) => theme.fontFamily.text};
  margin-bottom: 16px;
`

export const Title = styled(Description)`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.title};
  margin-bottom: 0px;
`
