import { useTranslation } from 'react-i18next'

import { StyledButton } from './styles'

export const BuyButton = () => {
  const { t } = useTranslation('plant')

  return <StyledButton title={t('button')} />
}
