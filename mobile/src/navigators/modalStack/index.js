import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationName, navigationOptions } from '@/constants';
import { WebViewModal } from '@/components';
import { commonStyles } from '@/styles';

const Stack = createNativeStackNavigator();

const ModalStack = () => (
  <Stack.Navigator screenOptions={{ presentation: 'modal' }}>
    <Stack.Screen
      name={navigationName.modal.webView}
      component={WebViewModal}
      options={({ route }) => ({
        headerTitle: route?.params?.title,
        ...navigationOptions.commonHeader,
        headerStyle: commonStyles.headerWhiteStyle,
      })}
    />
  </Stack.Navigator>
);

export default ModalStack;
