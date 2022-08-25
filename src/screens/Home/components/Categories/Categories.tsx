import { useCallback } from 'react'
import { ListRenderItem } from 'react-native'
import { useStore } from 'effector-react'

import { $categoryStore } from 'src/store/plants'

import { Category } from './Category'
import { categories } from './data'
import { StyledFlatList } from './styles'

export const Categories = () => {
  const selectedCategory = useStore($categoryStore)

  const renderCategory: ListRenderItem<string> = useCallback(
    ({ item, index }) => (
      <Category
        category={item}
        isFirst={index === 0}
        isSelected={item === selectedCategory}
        isLast={index === categories.length - 1}
      />
    ),
    [selectedCategory],
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
