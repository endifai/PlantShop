import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.accent};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  min-width: 140px;
  padding: 8px 16px;
  border-radius: 8px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: 16px;
  font-family: ${({ theme }) => theme.fontFamily.text};
`
