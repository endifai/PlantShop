import { FlatList, StyleProp, ViewStyle } from 'react-native'

import { Banner } from './Banner'
import { data } from './data'

export const BannersList = () => (
  <FlatList
    data={data}
    renderItem={Banner}
    horizontal
    showsHorizontalScrollIndicator={false}
    style={style}
  />
)

const style: StyleProp<ViewStyle> = {
  marginBottom: 8,
}
