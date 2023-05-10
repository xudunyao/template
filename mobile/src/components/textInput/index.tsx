import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import { colors } from '@/styles';
import { CloseFill } from '@/assets/svgs';
import { Props } from './types';
import styles from './styles';

const MyTextInput: React.FC<Props> = ({
  onSubmitEditing,
  onChangeText,
  onFocus,
  onBlur,
  placeholder,
  customStyles,
  value = '',
  keyboardType = 'default',
  error = '',
  maxLength,
  clearable,
  multiline,
  numberOfLines,
}) => {
  const handleSubmitEditing = ({ nativeEvent: { text } }: any) => {
    if (onSubmitEditing) {
      onSubmitEditing(text);
    }
  };

  const handleFocus = () => {
    if (onFocus) {
      onFocus();
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur(value);
    }
  };

  const handleChangeText = (val: any) => {
    if (onChangeText) {
      onChangeText(val);
    }
  };

  return (
    <View
      style={[
        styles.container,
        customStyles?.container,
        error ? styles.errorContainer : {},
      ]}>
      <TextInput
        style={[styles.input, customStyles?.input]}
        placeholderTextColor={colors.textTertiary}
        keyboardType={keyboardType}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
        onFocus={handleFocus}
        onBlur={handleBlur}
        blurOnSubmit
        maxLength={maxLength}
        multiline={multiline}
        numberOfLines={numberOfLines}
        textAlignVertical="top"
      />
      {clearable && !!value && (
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.clearButton}
          onPress={() => handleChangeText(null)}>
          <CloseFill fill="#999" width={22} height={22} />
        </TouchableOpacity>
      )}
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default MyTextInput;
