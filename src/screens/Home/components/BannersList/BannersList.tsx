import { FlatList } from 'react-native'

import { Banner } from './Banner'
import { data } from './data'

export const BannersList = () => {
  return (
    <FlatList
      data={data}
      renderItem={Banner}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}
