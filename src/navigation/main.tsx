import { ReactElement } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { PlantScreen } from 'src/screens/Plant'

import { RoutesEnum } from './routes'
import type { BottomTabsParamList } from './tabs'
import { TabsNavigator } from './tabs'

export type MainNavigatorParamList = {
  [RoutesEnum.MAIN]: BottomTabsParamList
  [RoutesEnum.PLANT]: { params: { id: string } }
}

const Stack = createNativeStackNavigator<MainNavigatorParamList>()

export const MainNavigator = (): ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name={RoutesEnum.MAIN}
      component={TabsNavigator}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name={RoutesEnum.PLANT}
      component={PlantScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)
