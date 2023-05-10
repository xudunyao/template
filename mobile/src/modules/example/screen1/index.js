import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';

import { List } from '@/components';
import styles from '../styles';

import store from './store';

const Screen1 = () => (
  <View style={styles.container}>
    <List
      customStyles={styles.container}
      data={store.list}
      pageNumber={store.pageNumber}
      totalPage={store.totalPage}
      getData={page => store.getList(page)}
      reset={() => store.reset()}
      renderItem={({ item }) => (
        <View style={{ padding: 20, borderBottomWidth: 1 }}>
          <Text>{item}</Text>
        </View>
      )}
    />
  </View>
);

Screen1.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default observer(Screen1);
