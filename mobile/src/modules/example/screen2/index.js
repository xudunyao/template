import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Button } from 'react-native';

import { navigationName } from '@/constants';
import styles from '../styles';

const Screen2 = ({ navigation }) => (
  <View style={styles.container}>
    <Text>Example Screen2</Text>
    <Button
      onPress={() =>
        navigation.navigate(navigationName.example.home, {
          screen: navigationName.example.screen1,
        })
      }
      title="Go to Screen1"
    />
  </View>
);

Screen2.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Screen2;
