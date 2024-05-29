export interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  ariaLabel: string;
  onClick?: () => void;
  className?: string;
}
