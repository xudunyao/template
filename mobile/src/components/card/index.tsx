import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { colors } from '@/styles';
import { Props } from './types';
import styles from './styles';

const Card: React.FC<Props> = ({
  children,
  title,
  headerRight,
  customStyles,
  loading,
}) => (
  <View style={[styles.container, customStyles]}>
    {(title || headerRight) && (
      <View style={[styles.header, children ? { marginBottom: 12 } : {}]}>
        {typeof title === 'string' ? (
          <Text style={styles.title}>{title}</Text>
        ) : (
          title
        )}
        {typeof headerRight === 'string' ? (
          <Text style={styles.headerRightTitle}>{headerRight}</Text>
        ) : (
          headerRight
        )}
      </View>
    )}
    {loading ? (
      <ActivityIndicator
        size="small"
        color={colors.primaryLighter}
        style={styles.indicator}
      />
    ) : (
      children
    )}
  </View>
);

export default Card;
