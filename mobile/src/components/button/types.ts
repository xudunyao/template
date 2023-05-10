import { TextStyle, ViewStyle } from 'react-native';

export enum Type {
  default = 'default',
  primary = 'primary',
}

export enum Align {
  start = 'flex-start',
  end = 'flex-end',
  center = 'center',
}

export interface CustomStyles {
  container: ViewStyle;
  title: TextStyle;
}

export type Props = {
  type?: Type;
  title: string | JSX.Element;
  align?: Align;
  prefix?: JSX.Element;
  suffix?: JSX.Element;
  block?: boolean;
  round?: boolean;
  ghost?: boolean;
  disabled?: boolean;
  onPress: () => void;
  customStyles?: CustomStyles;
  loading?: false;
};
