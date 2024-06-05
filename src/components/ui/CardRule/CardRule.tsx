import { ICardRuleProps } from './CardRule.types';

const CardRule: React.FC<ICardRuleProps> = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CardRule;
