import { Image, ImageStyle, StyleProp } from 'react-native'

import { Container } from './styles'

export const DevelopmentScreen = () => (
  <Container>
    <Image
      source={require('src/assets/images/404.png')}
      resizeMode="contain"
      style={imageStyle}
    />
  </Container>
)

const imageStyle: StyleProp<ImageStyle> = {
  width: '100%',
}
