export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant: 'main' | 'secondary' | 'readmore-main' | 'readmore-secondary';
  icon?: React.ReactNode;
  iconPosition?: 'before' | 'after';
  onClick?: () => void;
  className?: string;
}
