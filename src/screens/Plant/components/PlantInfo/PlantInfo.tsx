import { useTranslation } from 'react-i18next'

import { Plant } from 'src/types/plant'

import { BuyButton } from '../BuyButton'
import {
  Container,
  Description,
  DescriptionTitle,
  DescriptionWrapper,
  Name,
  Price,
} from './styles'

type Props = Pick<Plant, 'name' | 'price' | 'description'>

export const PlantInfo = ({ name, price, description }: Props) => {
  const { t } = useTranslation('plant')

  return (
    <Container>
      <Name>{name}</Name>

      <Price>{price}</Price>

      <DescriptionWrapper>
        <DescriptionTitle>{t('descriptionTitle')}</DescriptionTitle>

        <Description>{description}</Description>
      </DescriptionWrapper>

      <BuyButton />
    </Container>
  )
}
