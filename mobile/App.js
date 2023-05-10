/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { navigationRef } from '@/services/navigation';
import Navigator from '@/navigators';
import { Toast } from '@/components';
import { colors } from '@styles';

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    notification: colors.tomato,
  },
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NavigationContainer theme={Theme} ref={navigationRef}>
        <Navigator />
      </NavigationContainer>
      <Toast />
    </>
  );
};

export default App;
