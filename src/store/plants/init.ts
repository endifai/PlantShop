import { $categoryStore, $plantsStore, loadPlantsFx, toggleCategory } from '.'

$plantsStore.on(loadPlantsFx.doneData, (_, result) => result)

$categoryStore.on(toggleCategory, (state, category) =>
  state === category ? null : category,
)
