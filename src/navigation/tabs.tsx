import { ReactElement } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { MainScreen } from 'src/screens/Main'
import { SettingsScreen } from 'src/screens/Settings'

import { RoutesEnum } from './routes'

export type BottomTabsParamList = {
  [RoutesEnum.LIST]: undefined
  [RoutesEnum.SETTINGS]: undefined
}

const Tabs = createBottomTabNavigator<BottomTabsParamList>()

export const TabsNavigator = (): ReactElement => (
  <Tabs.Navigator>
    <Tabs.Screen
      name={RoutesEnum.LIST}
      component={MainScreen}
      options={{ tabBarLabel: 'List' }}
    />
    <Tabs.Screen
      name={RoutesEnum.SETTINGS}
      component={SettingsScreen}
      options={{ tabBarLabel: 'Settings' }}
    />
  </Tabs.Navigator>
)
