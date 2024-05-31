export interface IModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  close: () => void;
  variant: 'simple' | 'burger';
  className?: string;
}
