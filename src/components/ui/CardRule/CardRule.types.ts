export interface ICardRuleProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}
