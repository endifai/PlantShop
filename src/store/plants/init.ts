import { persist } from 'effector-storage/rn/async'

import {
  $categoryStore,
  $plantsMapStore,
  loadPlantsFx,
  toggleCategory,
} from '.'

persist({ store: $plantsMapStore, key: '@plants' })
persist({ store: $categoryStore, key: '@category' })

$plantsMapStore.on(loadPlantsFx.doneData, (_, result) => result)

$categoryStore.on(toggleCategory, (state, category) =>
  state === category ? null : category,
)
