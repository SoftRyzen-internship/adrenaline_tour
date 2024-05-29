export interface ILinkButtonProps {
  children: React.ReactNode;
  href: string;
  variant: 'main' | 'secondary' | 'secondary-blue' | 'navlink' | 'footer';
  toScroll?: boolean;
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'before' | 'after';
  onClick?: () => void;
  className?: string;
}
