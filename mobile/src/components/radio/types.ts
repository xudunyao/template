export interface Props {
  title: string | JSX.Element;
  checked: boolean;
  onChange?: (checked: boolean) => void;
  error?: string;
}
