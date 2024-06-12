'use client';

import { useState } from 'react';

import Slider from '@/components/common/Slider';
import CardRule from '@/components/ui/CardRule';

import Nature from '/public/icons/nature.svg';
import Rafting from '/public/icons/rafting.svg';
import Hiking from '/public/icons/hiking.svg';
import Health from '/public/icons/health.svg';

import { rules } from '@/data';
import { useScreenSize } from '@/hooks';

import { IIconsRules } from './Rules.types';

const IconsRules: IIconsRules = {
  1: <Nature width={40} height={40} />,
  2: <Rafting width={40} height={40} />,
  3: <Hiking width={40} height={40} />,
  4: <Health width={40} height={40} />,
};

const slides = rules.rules.map(({ id, title, description }) => ({
  id: id,
  content: (
    <CardRule
      key={id}
      title={title}
      description={description}
      icon={IconsRules[id]}
    />
  ),
}));

const Rules = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDesktop = useScreenSize('(min-width: 1280px)');

  return (
    <section className='section container'>
      <h2 className='section-title mb-8 w-[194px]'>{rules.title}</h2>
      {isDesktop ? (
        <ul className='flex gap-8 smOnly:hidden mdOnly:hidden'>
          {rules.rules.map(({ id, title, description }, index) => (
            <CardRule
              key={id}
              title={title}
              description={description}
              icon={IconsRules[id]}
              isActive={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </ul>
      ) : (
        <Slider slides={slides} section='upcomingTours' />
      )}
    </section>
  );
};

export default Rules;
