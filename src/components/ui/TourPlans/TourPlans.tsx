import showdown from 'showdown';

import Title from '@/components/ui/Title';
import { removeIdAndConvertHeadingsToH3 } from '@/utils';

import { ITourPlansProps } from './TourPlans.types';

const converter = new showdown.Converter();

const TourPlans: React.FC<ITourPlansProps> = ({ data }) => {
  if (!data) {
    return;
  }

  let htmlContent = converter.makeHtml(data.description);
  htmlContent = removeIdAndConvertHeadingsToH3(htmlContent);

  return (
    <div className='mt-12 notXL:container'>
      <div className='mb-12 xl:mb-16 xl:w-[652px]'>
        <Title className='mb-8 font-unbounded text-[18px] font-bold leading-[1.30] text-additionalBlue md:text-[24px] md:leading-[1] xl:mb-10 xl:text-[32px]'>
          {data.title}
        </Title>

        <div
          className='prose-h3:mb-3 prose-h3:font-inter prose-h3:text-[16px] prose-h3:font-bold prose-h3:leading-[1.3] prose-h3:text-blueDefault prose-p:mb-6 prose-p:font-inter prose-p:text-[14px] prose-p:leading-[1.3] prose-p:text-dark38 md:prose-h3:text-[20px] md:prose-p:mb-8 md:prose-p:text-[16px] md:prose-p:leading-[1.5] xl:prose-h3:mb-4 xl:prose-h3:text-[24px] xl:prose-h3:leading-[1.1] xl:prose-p:mb-10 xl:prose-p:text-[18px]'
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        ></div>
      </div>
    </div>
  );
};

export default TourPlans;
