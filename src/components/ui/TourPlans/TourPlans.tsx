'use client';
import showdown from 'showdown';

import AnimatedText from '@/components/ui/AnimatedText';
import Title from '@/components/ui/Title';

import { ITourPlansProps } from './TourPlans.types';

const converter = new showdown.Converter();

const TourPlans: React.FC<ITourPlansProps> = ({ data }) => {
  if (!data) {
    return;
  }
  const htmlContent = converter.makeHtml(data.description);

  return (
    <div className='mt-12 notXL:container'>
      <div className='mb-12 xl:mb-16 xl:w-[652px]'>
        <Title className='mb-8 font-unbounded text-[18px] font-bold leading-[1.30] text-additionalBlue md:text-[24px] md:leading-[1] xl:mb-10 xl:text-[32px]'>
          {data.title}
        </Title>
        <AnimatedText className='xl:[--x-hidden:-80px]'>
          <div
            className='prose-h2:mb-3 prose-h2:font-inter prose-h2:text-[16px] prose-h2:font-bold prose-h2:leading-[1.3] prose-h2:text-blueDefault prose-p:mb-6 prose-p:font-inter prose-p:text-[14px] prose-p:leading-[1.3] prose-p:text-dark38 md:prose-h2:text-[20px] md:prose-p:mb-8 md:prose-p:text-[16px] md:prose-p:leading-[1.5] xl:prose-h2:mb-4 xl:prose-h2:text-[24px] xl:prose-h2:leading-[1.1] xl:prose-p:mb-10 xl:prose-p:text-[18px]'
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          ></div>
        </AnimatedText>
      </div>
    </div>
  );
};

export default TourPlans;
