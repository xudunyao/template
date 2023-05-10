import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@modules/home';
import ExampleDashboard from '@/modules/example/dashboard';
import { navigationName } from '@/constants';
import { Dashboard as DashboardIcon, Home as HomeIcon } from '@/assets/svgs';

const Tab = createBottomTabNavigator();

const HomeTab = () => (
  <Tab.Navigator
    initialRouteName={navigationName.home}
    screenOptions={{
      activeTintColor: '#3d8ef7',
      inactiveTintColor: '#999999',
    }}>
    <Tab.Screen
      name={navigationName.home}
      component={Home}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => <HomeIcon width={size} fill={color} />,
      }}
    />
    <Tab.Screen
      name={navigationName.example.dashboard}
      component={ExampleDashboard}
      options={{
        headerShown: false,
        tabBarLabel: 'Example',
        tabBarBadge: 3,
        tabBarIcon: ({ color, size }) => (
          <DashboardIcon width={size} fill={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default HomeTab;
