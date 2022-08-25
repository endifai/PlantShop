import { FlatList, Text, TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components'

export const StyledFlatList = styled(FlatList<string>)`
  padding-top: 8px;
  padding-bottom: 8px;
  height: 96px;
`

export const Container = styled(TouchableOpacity)<{
  isFirst: boolean
  isSelected: boolean
  isLast: boolean
}>`
  height: 40px;
  align-items: center;
  padding: 8px 16px;
  margin-right: ${({ isLast }) => (isLast ? '24px' : '8px')};
  ${({ isFirst }) =>
    isFirst &&
    css`
      margin-left: 24px;
    `}
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.accent : theme.colors.white};
  border-radius: 16px;
`

export const Content = styled(Text)<{ isSelected: boolean }>`
  font-size: 16px;
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.white : theme.colors.primary};
  font-family: ${({ theme }) => theme.fontFamily.text};
`
