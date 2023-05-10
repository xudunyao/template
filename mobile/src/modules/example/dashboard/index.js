import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, SafeAreaView } from 'react-native';

import { Button, Popup, ActionSheet } from '@/components';

import { navigationName } from '@/constants';
import Form from './form';
import styles from '../styles';

const Example = ({ navigation }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [actionSheetVisible, setActionSheetVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Form />
        <View style={styles.buttonRow}>
          <Button
            onPress={() =>
              navigation.navigate(navigationName.example.home, {
                screen: navigationName.example.screen2,
              })
            }
            title="Go Example Screen"
          />
          <Button title="Disabled" disabled />
        </View>
        <View style={styles.buttonRow}>
          <Button
            onPress={() =>
              navigation.navigate(navigationName.modal.stack, {
                screen: navigationName.modal.webView,
                params: {
                  title: 'WebView',
                  uri: 'https://www.mumugz.com/',
                },
              })
            }
            title="Go WebView"
          />
          <Button
            onPress={() =>
              navigation.navigate(navigationName.example.home, {
                screen: navigationName.example.screen1,
              })
            }
            title="Go List Screen"
          />
        </View>
        <View style={styles.buttonRow}>
          <Button
            onPress={() => setPopupVisible(true)}
            title="Open Popup"
            ghost
          />
          <Button
            onPress={() => setActionSheetVisible(true)}
            title="Open ActionSheet"
            ghost
          />
        </View>
        <Popup
          title="Popup Title"
          content="Content or Component"
          visible={popupVisible}
          buttons={[
            {
              id: 'cancel',
              title: 'Cancel',
              onPress: () => setPopupVisible(false),
            },
            {
              id: 'confirm',
              title: 'Confirm',
              type: 'primary',
              onPress: () => setPopupVisible(false),
            },
          ]}
        />
        <ActionSheet
          visible={actionSheetVisible}
          cancelable
          maskClosable
          onCancel={() => setActionSheetVisible(false)}
          actions={[
            {
              id: 'Action1',
              title: 'Action1',
              onPress: () => setActionSheetVisible(false),
            },
            {
              id: 'Action2',
              title: 'Action2',
              onPress: () => setActionSheetVisible(false),
            },
          ]}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

Example.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default Example;
