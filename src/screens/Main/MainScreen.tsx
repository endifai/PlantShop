import { useTranslation } from 'react-i18next'
import { View } from 'react-native'
import styled from 'styled-components/native'

export const MainScreen = () => {
  const { t } = useTranslation('main')

  return (
    <View>
      <Title>{t('title')}</Title>
    </View>
  )
}

const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 22px;
`
