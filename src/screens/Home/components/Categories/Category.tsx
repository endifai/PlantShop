import { StyleProp, ViewStyle } from 'react-native'

import { Container, Content } from './styles'

interface Props {
  category: string
  onPress: () => void
  isSelected: boolean
  isFirst: boolean
  isLast: boolean
}

export const Category = ({
  category,
  onPress,
  isFirst,
  isLast,
  isSelected,
}: Props) => (
  <Container
    onPress={onPress}
    isFirst={isFirst}
    isSelected={isSelected}
    isLast={isLast}
    style={shadow}>
    <Content isSelected={isSelected}>{category}</Content>
  </Container>
)

const shadow: StyleProp<ViewStyle> = {
  elevation: 10,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowRadius: 3,
  shadowOpacity: 0.2,
}
