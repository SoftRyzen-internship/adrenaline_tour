import clsx from 'clsx';

import Button from '@/components/ui/Button';

import ArrowRight from '/public/icons/arrow-right.svg';

import { rules } from '@/data';

import s from './CardRule.module.css';
import { ICardRuleProps } from './CardRule.types';

const CardRule: React.FC<ICardRuleProps> = ({ title, description, icon }) => {
  return (
    <li
      className={clsx(
        'flex h-[325px] flex-col justify-end bg-blueDefault p-6 xl:w-[280px]',
        s['bgCardRule'],
      )}
    >
      <div className='mb-4 fill-white'>{icon}</div>
      <h3 className='mb-4 w-[156px] font-unbounded text-[16px] font-bold leading-[1] text-white md:text-[18px] md:leading-[1.30]'>
        {title}
      </h3>
      <p className='font-inter text-[14px] leading-[1.30] text-white md:leading-[1.50] xl:md:leading-[1.40]'>
        {description}
      </p>
      <Button
        variant='secondary'
        iconPosition='after'
        icon={<ArrowRight width={16} height={16} className='h-4 w-4' />}
      >
        {rules.btn}
      </Button>
    </li>
  );
};

export default CardRule;
