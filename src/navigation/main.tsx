import { ReactElement } from 'react'
import { NavigatorScreenParams } from '@react-navigation/core'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { RoutesEnum } from './routes'
import type { BottomTabsParamList } from './tabs'
import { TabsNavigator } from './tabs'

export type MainNavigatorParamList = {
  [RoutesEnum.MAIN]: NavigatorScreenParams<BottomTabsParamList>
}

const Stack = createNativeStackNavigator<MainNavigatorParamList>()

export const MainNavigator = (): ReactElement => (
  <Stack.Navigator>
    <Stack.Screen
      name={RoutesEnum.MAIN}
      component={TabsNavigator}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
)
