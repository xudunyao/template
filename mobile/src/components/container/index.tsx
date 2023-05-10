import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';

import { colors } from '@/styles';
import styles from './styles';
import { Props } from './types';

const Container: React.FC<Props> = ({
  loading,
  loadingTitle,
  children,
  style,
}) => (
  <View style={[styles.container, style]}>
    {loading ? (
      <View style={styles.maskContainer}>
        <ActivityIndicator
          color={colors.primaryLighter}
          size="large"
          style={styles.activityIndicator}
        />
        {loadingTitle ? (
          <Text style={styles.loadingTitle}>{loadingTitle}</Text>
        ) : null}
      </View>
    ) : (
      children
    )}
  </View>
);

export default Container;
