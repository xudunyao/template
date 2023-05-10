import { ViewStyle } from 'react-native';

export type Props = {
  data: any[];
  getData: (pageNumber?: number) => void;
  pageNumber: number;
  totalPage: number;
  renderItem: ({ item }: { item: any }) => JSX.Element;
  customStyles?: ViewStyle;
  emptyComponent: JSX.Element;
  reset?: () => void;
};
