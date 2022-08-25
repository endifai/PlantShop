import { persist } from 'effector-storage/rn/async'

import { $categoryStore, $plantsStore, loadPlantsFx, toggleCategory } from '.'

persist({ store: $plantsStore, key: '@plants' })
persist({ store: $categoryStore, key: '@category' })

$plantsStore.on(loadPlantsFx.doneData, (_, result) => result)

$categoryStore.on(toggleCategory, (state, category) =>
  state === category ? null : category,
)
