import { useCallback } from 'react'
import { ListRenderItem } from 'react-native'

import { Category } from './Category'
import { categories } from './data'
import { StyledFlatList } from './styles'

export const Categories = () => {
  const renderCategory: ListRenderItem<string> = useCallback(
    ({ item, index }) => (
      <Category
        category={item}
        isFirst={index === 0}
        isSelected={index === 0}
        isLast={index === categories.length - 1}
      />
    ),
    [],
  )

  return (
    <StyledFlatList
      data={categories}
      renderItem={renderCategory}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  )
}
