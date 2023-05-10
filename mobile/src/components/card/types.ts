import { TextStyle, ViewStyle } from 'react-native';

export interface CustomStyles {
  container: ViewStyle;
  title: TextStyle;
}

export type Props = {
  title?: string | JSX.Element;
  headerRight?: string | JSX.Element;
  children?: JSX.Element;
  customStyles?: ViewStyle;
  loading: false;
};
