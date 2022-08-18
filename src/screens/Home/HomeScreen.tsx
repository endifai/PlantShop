import { useTranslation } from 'react-i18next'
import styled from 'styled-components/native'

import { Layout } from 'src/components/Layout'

export const HomeScreen = () => {
  const { t } = useTranslation('home')

  return (
    <Layout>
      <Title>{t('title')}</Title>
    </Layout>
  )
}

const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 22px;
`
