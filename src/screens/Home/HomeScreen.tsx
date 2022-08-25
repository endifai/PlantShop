import { useCallback, useEffect, useRef } from 'react'
import { FlatList, ListRenderItem, StyleProp, ViewStyle } from 'react-native'
import { useScrollToTop } from '@react-navigation/native'
import { useStore } from 'effector-react'

import { Layout } from 'src/components/Layout'
import { $filteredPlants, loadPlantsFx } from 'src/store/plants'
import { Plant } from 'src/types/plant'

import { BannersList } from './components/BannersList'
import { Categories } from './components/Categories'
import { Header } from './components/Header'
import { PlantCard } from './components/PlantCard'

const ListHeaderComponent = (
  <>
    <Header />

    <BannersList />

    <Categories />
  </>
)

export const HomeScreen = () => {
  const ref = useRef<FlatList>(null)

  const plants = useStore($filteredPlants)

  useScrollToTop(ref)

  useEffect(() => {
    loadPlantsFx()
  }, [])

  const renderItem = useCallback<ListRenderItem<Plant>>(
    ({ item }) => <PlantCard key={item.id} {...item} />,
    [],
  )

  return (
    <Layout>
      <FlatList
        ref={ref}
        data={plants}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={ListHeaderComponent}
        columnWrapperStyle={columnWrapperStyle}
      />
    </Layout>
  )
}

const columnWrapperStyle: StyleProp<ViewStyle> = {
  justifyContent: 'space-between',
  marginHorizontal: 24,
}
