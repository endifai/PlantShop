import { ScrollView, StyleProp, ViewStyle } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { useStoreMap } from 'effector-react'

import { Layout } from 'src/components/Layout'
import { RoutesEnum } from 'src/navigation'
import { MainNavigatorParamList } from 'src/navigation/main'
import { $plantsMapStore } from 'src/store/plants'

import { PlantInfo } from './components/PlantInfo'
import { Preview } from './components/Preview'

export const PlantScreen = () => {
  const { params } =
    useRoute<RouteProp<MainNavigatorParamList, RoutesEnum.PLANT>>()
  const plant = useStoreMap($plantsMapStore, (plants) => plants[params.id])

  return (
    <Layout>
      <Preview image={plant.image} />

      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={contentContainerStyle}>
        <PlantInfo
          name={plant.name}
          description={plant.description}
          price={plant.price}
        />
      </ScrollView>
    </Layout>
  )
}

const contentContainerStyle: StyleProp<ViewStyle> = {
  minHeight: '100%',
}
