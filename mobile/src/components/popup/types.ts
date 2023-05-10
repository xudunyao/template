export enum ButtonType {
  primary = 'primary',
  default = 'default',
}

export interface Button {
  type: ButtonType;
  onPress: () => void;
  title?: string | JSX.Element;
}

export type Props = {
  visible: boolean;
  icon?: JSX.Element;
  title?: string | JSX.Element;
  content?: string | JSX.Element;
  buttons?: [Button];
  position?: 'top' | 'bottom' | 'center';
  onMaskPress?: () => void;
};
