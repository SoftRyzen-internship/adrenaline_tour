export interface IFormModalProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  text: string;
  buttonText: string;
  error?: boolean;
}
