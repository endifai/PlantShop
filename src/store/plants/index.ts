import { createEffect, createEvent, createStore } from 'effector'

import { Plant } from 'src/types/plant'

export const $plantsStore = createStore<Plant[]>([])
export const $categoryStore = createStore<string | null>(null)

export const toggleCategory = createEvent<string>()

export const loadPlantsFx = createEffect<() => Promise<Plant[]>>(async () => {
  const response = await fetch('http://localhost:8000/plants/')
  const plants = await response.json()

  return plants
})
