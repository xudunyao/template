import { KeyboardType, TextStyle, ViewStyle } from 'react-native';

export interface CustomStyles {
  container: ViewStyle;
  input: TextStyle;
}

export type Props = {
  value: string;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  placeholder?: string;
  disabled?: boolean;
  keyboardType?: KeyboardType;
  onSubmitEditing?: (value: string) => void;
  onChangeText?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: (value?: string) => void;
  validator: () => void;
  customStyles?: CustomStyles;
  error?: string;
  clearable?: false;
  maxLength?: number;
  multiline?: false;
  numberOfLines?: number;
};
