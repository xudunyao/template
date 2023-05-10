import { ViewStyle } from 'react-native';

export type Props = {
  onRefresh: () => void;
  titleColor?: string;
  tintColor?: string;
  title?: string;
  style?: ViewStyle;
  children?: JSX.Element;
};
