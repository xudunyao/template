import React from 'react';
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';

import { colors, sizes } from '@/styles';
import { Props, Type, Align } from './types';

import styles from './styles';

const Button: React.FC<Props> = ({
  type = Type.primary,
  title,
  align = Align.center,
  prefix,
  suffix,
  block,
  round = true,
  disabled,
  ghost,
  onPress,
  customStyles,
  loading,
}) => (
  <TouchableOpacity
    onPress={onPress}
    disabled={disabled || loading}
    activeOpacity={0.7}
    style={[
      styles.container,
      align !== Align.center && { paddingHorizontal: sizes.paddingL },
      type && styles[type],
      block && styles.block,
      round && styles.round,
      ghost && { ...styles.ghost, ...styles[`${type}Ghost`] },
      customStyles?.container,
      (disabled || loading) && {
        ...styles[`${type}${ghost ? 'Ghost' : ''}Disabled`],
      },
    ]}>
    {prefix}
    <View
      style={{
        flex: block ? 1 : 0,
        flexDirection: 'row',
        justifyContent: align,
      }}>
      {loading ? (
        <ActivityIndicator
          color={colors.white}
          size="small"
          style={styles.activityIndicator}
        />
      ) : null}
      {typeof title === 'string' ? (
        <Text
          style={[
            styles.title,
            styles[`${type}Title`],
            ghost && styles[`${type}GhostTitle`],
            customStyles?.title,
            disabled && {
              ...styles[`${type}${ghost ? 'Ghost' : ''}DisabledTitle`],
            },
          ]}>
          {title}
        </Text>
      ) : (
        title
      )}
    </View>
    {suffix}
  </TouchableOpacity>
);

export default Button;
