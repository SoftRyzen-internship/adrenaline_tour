'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';

import Button from '@/components/ui/Button';

import ArrowRight from '/public/icons/arrow-right.svg';

import { rules } from '@/data';

import s from './CardRule.module.css';
import { ICardRuleProps } from './CardRule.types';

const CardRule: React.FC<ICardRuleProps> = ({
  title,
  description,
  icon,
  isActive,
  onClick,
}) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      variants={item}
      className={clsx(
        'flex h-[325px] flex-col justify-end bg-blueDefault p-6 transition xl:w-[280px] notXL:opacity-100',
        s['bgCardRule'],
        {
          'xl:bg-blueDefault': isActive,
          'xl:bg-lightBlue': !isActive,
        },
      )}
    >
      <div
        className={clsx('mb-4 fill-white transition', {
          'xl:fill-blueDefault': !isActive,
          'xl:fill-white': isActive,
        })}
      >
        {icon}
      </div>
      <h3
        className={clsx(
          'mb-4 w-[156px] font-unbounded text-[16px] font-bold leading-[1] text-white transition md:text-[18px] md:leading-[1.30]',
          {
            'xl:text-blueDefault': !isActive,
            'xl:text-white': isActive,
          },
        )}
      >
        {title}
      </h3>
      <p className='font-inter text-[14px] leading-[1.30] text-white md:leading-[1.50] xl:hidden'>
        {description}
      </p>
      {isActive && (
        <p className='font-inter text-[14px] leading-[1.40] text-white smOnly:hidden mdOnly:hidden'>
          {description}
        </p>
      )}
      {!isActive && (
        <Button
          variant='secondary'
          iconPosition='after'
          className='mr-auto smOnly:hidden mdOnly:hidden'
          icon={<ArrowRight width={16} height={16} className='h-4 w-4' />}
          onClick={onClick}
        >
          {rules.btn}
        </Button>
      )}
    </motion.div>
  );
};

export default CardRule;
