import { ReactElement } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { CartScreen } from 'src/screens/Cart'
import { FavoritesScreen } from 'src/screens/Favorites'
import { HomeScreen } from 'src/screens/Home'
import { ProfileScreen } from 'src/screens/Profile'

import { RoutesEnum } from './routes'

export type BottomTabsParamList = {
  [RoutesEnum.HOME]: undefined
  [RoutesEnum.CART]: undefined
  [RoutesEnum.FAVORITES]: undefined
  [RoutesEnum.PROFILE]: undefined
}

const Tabs = createBottomTabNavigator<BottomTabsParamList>()

export const TabsNavigator = (): ReactElement => (
  <Tabs.Navigator
    screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
    <Tabs.Screen name={RoutesEnum.HOME} component={HomeScreen} />
    <Tabs.Screen name={RoutesEnum.CART} component={CartScreen} />
    <Tabs.Screen name={RoutesEnum.FAVORITES} component={FavoritesScreen} />
    <Tabs.Screen name={RoutesEnum.PROFILE} component={ProfileScreen} />
  </Tabs.Navigator>
)
