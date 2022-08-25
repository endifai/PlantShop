import Config from 'react-native-config'
import {
  combine,
  createEffect,
  createEvent,
  createStore,
  Store,
} from 'effector'

import { Plant } from 'src/types/plant'

export const $plantsStore = createStore<Plant[]>([])
export const $categoryStore = createStore<string | null>(null)

export const $filteredPlants: Store<Plant[]> = combine(
  $plantsStore,
  $categoryStore,
  (plants, category): Plant[] => {
    if (!category) {
      return plants
    }

    return plants.filter((plant) => plant.category === category)
  },
)

export const toggleCategory = createEvent<string>()

export const loadPlantsFx = createEffect<() => Promise<Plant[]>>(async () => {
  const response = await fetch(`${Config.API_URL}/plants/`)
  const plants = await response.json()

  return plants
})
