import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { navigationName, navigationOptions } from '@/constants';
import { commonStyles } from '@/styles';

import Screen1 from './screen1';
import Screen2 from './screen2';

const Stack = createNativeStackNavigator();

const screens = [
  {
    name: navigationName.example.screen1,
    component: Screen1,
    headerTitle: 'Example List',
  },
  {
    name: navigationName.example.screen2,
    component: Screen2,
    headerTitle: 'Example Screen2',
  },
];

const Example = () => (
  <Stack.Navigator>
    {screens.map(s => (
      <Stack.Screen
        key={s.name}
        name={s.name}
        component={s.component}
        options={{
          ...navigationOptions.commonHeader,
          headerStyle: commonStyles.headerStyle,
          headerTitle: s.headerTitle,
          ...(s.options || {}),
        }}
      />
    ))}
  </Stack.Navigator>
);

export default Example;
