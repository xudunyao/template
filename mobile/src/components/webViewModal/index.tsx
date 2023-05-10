import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { WebView } from 'react-native-webview';

import { Props } from './types';
import styles from './styles';

const MyWebView: React.FC<Props> = ({ route }) => (
  <React.Fragment>
    <WebView
      startInLoadingState
      renderLoading={() => (
        <View style={styles.loadingContainer}>
          <ActivityIndicator />
        </View>
      )}
      source={{ uri: route?.params?.uri }}
      style={styles.container}
    />
  </React.Fragment>
);

export default MyWebView;
