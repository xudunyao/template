import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { navigationOptions, navigationName } from '@/constants';

import Example from '@modules/example';
import HomeTab from './homeTab';
import ModalStack from './modalStack';

const Stack = createNativeStackNavigator();

const screens = [
  {
    name: navigationName.tab,
    component: HomeTab,
  },
  {
    name: navigationName.example.home,
    component: Example,
  },
  {
    name: navigationName.modal.stack,
    component: ModalStack,
  },
];

const Navigator = () => (
  <Stack.Navigator>
    {screens.map(s => (
      <Stack.Screen
        key={s.name}
        name={s.name}
        component={s.component}
        options={{
          ...navigationOptions.defaultOptions,
          ...(s.options || {}),
        }}
      />
    ))}
  </Stack.Navigator>
);

export default Navigator;
