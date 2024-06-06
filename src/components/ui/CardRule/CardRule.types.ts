export interface ICardRuleProps {
  title: string;
  description: string;
  icon: JSX.Element;
  isActive?: boolean;
  onClick?: () => void;
}
