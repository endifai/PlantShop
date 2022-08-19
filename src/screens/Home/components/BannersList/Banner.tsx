import { ListRenderItem } from 'react-native'

import { Button } from 'src/components/Button'
import { Banner as BannerType } from 'src/types/banner'

import {
  BannerImage,
  Container,
  Content,
  Description,
  ImageContainer,
  Title,
} from './styles'

export const Banner: ListRenderItem<BannerType> = ({ item, index }) => (
  <Container color={item.color} isFirst={index === 0}>
    <Content>
      <Title numberOfLines={1}>{item.title}</Title>
      <Description numberOfLines={2}>{item.description}</Description>

      {item.button && <Button title={item.button} />}
    </Content>

    <ImageContainer>
      <BannerImage source={item.image} resizeMode="cover" />
    </ImageContainer>
  </Container>
)
