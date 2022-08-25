import { useCallback } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { toggleCategory } from 'src/store/plants'

import { Container, Content } from './styles'

interface Props {
  category: string
  isSelected: boolean
  isFirst: boolean
  isLast: boolean
}

export const Category = ({ category, isFirst, isLast, isSelected }: Props) => {
  const onPress = useCallback(() => toggleCategory(category), [category])

  return (
    <Container
      onPress={onPress}
      isFirst={isFirst}
      isSelected={isSelected}
      isLast={isLast}
      style={shadow}>
      <Content isSelected={isSelected}>{category}</Content>
    </Container>
  )
}

const shadow: StyleProp<ViewStyle> = {
  elevation: 10,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowRadius: 3,
  shadowOpacity: 0.2,
}
