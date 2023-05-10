export interface Action {
  id: string;
  title: string | JSX.Element;
  onPress: () => void;
}

export type Props = {
  visible: boolean;
  cancelable: boolean;
  onCancel: () => void;
  maskClosable: boolean;
  actions: [Action];
};
