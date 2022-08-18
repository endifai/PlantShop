import { ReactElement } from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import { useTheme } from 'styled-components/native'

import { NavIcon } from 'src/components/NavIcon'
import { CartIcon, FavoritesIcon, HomeIcon, ProfileIcon } from 'src/icons'
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

export const TabsNavigator = (): ReactElement => {
  const theme = useTheme()

  const activeIconColor = theme.colors.accent
  const inactiveIconColor = theme.colors.inactive

  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarActiveTintColor: activeIconColor,
    tabBarInactiveTintColor: inactiveIconColor,
    tabBarStyle,
  }

  return (
    <Tabs.Navigator screenOptions={screenOptions}>
      <Tabs.Screen
        name={RoutesEnum.HOME}
        component={HomeScreen}
        options={{ tabBarIcon: NavIcon(HomeIcon) }}
      />
      <Tabs.Screen
        name={RoutesEnum.CART}
        component={CartScreen}
        options={{ tabBarIcon: NavIcon(CartIcon) }}
      />
      <Tabs.Screen
        name={RoutesEnum.FAVORITES}
        component={FavoritesScreen}
        options={{ tabBarIcon: NavIcon(FavoritesIcon) }}
      />
      <Tabs.Screen
        name={RoutesEnum.PROFILE}
        component={ProfileScreen}
        options={{ tabBarIcon: NavIcon(ProfileIcon) }}
      />
    </Tabs.Navigator>
  )
}

const tabBarStyle: StyleProp<ViewStyle> = {
  position: 'absolute',
  left: 24,
  bottom: 40,
  right: 24,
  height: 56,
  borderRadius: 16,
  paddingBottom: 0,
  paddingLeft: 12,
  paddingRight: 12,
  zIndex: 2,
  borderTopWidth: 0,
  elevation: 10,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowRadius: 5,
  shadowOpacity: 0.2,
}
