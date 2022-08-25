import { useTranslation } from 'react-i18next'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Title } from './styles'

export const Header = () => {
  const { t } = useTranslation('home')
  const { top } = useSafeAreaInsets()

  return <Title style={{ paddingTop: top }}>{t('header')}</Title>
}
