import { memo } from 'react'
import { ImageStyle, StyleProp } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

import { RoutesEnum } from 'src/navigation'
import { MainNavigatorParamList } from 'src/navigation/main'
import { Plant } from 'src/types/plant'

import { Container, Name, Preview, Price } from './styles'

export const PlantCard = memo(({ image, id, name, price }: Plant) => {
  const { push } =
    useNavigation<
      NativeStackNavigationProp<MainNavigatorParamList, RoutesEnum.MAIN>
    >()

  const handlePress = () => push(RoutesEnum.PLANT, { params: { id } })

  return (
    <Container onPress={handlePress}>
      <Preview
        source={{ uri: image }}
        resizeMode="cover"
        style={previewShadow}
      />
      <Name numberOfLines={1}>{name}</Name>
      <Price>{price}</Price>
    </Container>
  )
})

const previewShadow: StyleProp<ImageStyle> = {
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowRadius: 3,
  shadowOpacity: 0.2,
}
