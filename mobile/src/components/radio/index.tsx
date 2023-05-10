import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Checked } from '@/assets/svgs';
import { colors } from '@/styles';

import styles from './styles';
import { Props } from './types';

const Radio: React.FC<Props> = ({ title = null, checked, onChange, error }) => {
  const handlePress = () => {
    if (onChange) {
      onChange(!checked);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={handlePress}>
      <View style={styles.checkButton}>
        {checked ? (
          <Checked fill={colors.primary} width={16} height={16} />
        ) : (
          <View style={[styles.unchecked, error ? styles.error : {}]} />
        )}
      </View>
      {typeof title === 'string' ? (
        <Text style={styles.title}>{title}</Text>
      ) : (
        title
      )}
    </TouchableOpacity>
  );
};

export default Radio;
