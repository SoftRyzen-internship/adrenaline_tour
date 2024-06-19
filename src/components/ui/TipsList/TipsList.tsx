'use client';

import AnimationContainer from '@/components/common/AnimationContainer';
import CardTips from '@/components/ui/CardTips';
import { tipsData } from '@/data';

const TipsList = () => {
  return (
    <AnimationContainer className='xl:[--x-hidden:80px]'>
      <ul className='mb-8 flex flex-col gap-3 md:mb-12 md:gap-4 xl:mb-16 xl:flex-row xl:items-center xl:justify-between xl:gap-4'>
        {tipsData.cards.map(({ id, title, text }) => {
          return <CardTips key={id} title={title} text={text} />;
        })}
      </ul>
    </AnimationContainer>
  );
};

export default TipsList;
