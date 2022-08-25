import { useTranslation } from 'react-i18next'
import styled from 'styled-components/native'

import { Layout } from 'src/components/Layout'

import { BannersList } from './components/BannersList'
import { Categories } from './components/Categories'

export const HomeScreen = () => {
  const { t } = useTranslation('home')

  return (
    <Layout>
      <Title>{t('header')}</Title>

      <BannersList />

      <Categories />
    </Layout>
  )
}

const Title = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  font-family: ${({ theme }) => theme.fontFamily.title};
  padding: 0px 24px;
  margin-bottom: 16px;
`
