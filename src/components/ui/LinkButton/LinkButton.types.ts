export interface ILinkButtonProps {
  children: React.ReactNode;
  href?: string;
  variant:
    | 'main'
    | 'secondary'
    | 'secondary-blue'
    | 'navLink'
    | 'footer'
    | 'disclosure';
  toScroll?: boolean;
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'before' | 'after';
  currentDisclosure?: boolean;
  onClick?: () => void;
  onSetActive?: (to: string) => void;
  className?: string;
}
