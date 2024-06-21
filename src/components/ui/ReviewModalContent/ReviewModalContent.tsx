import { formatDateYearMonthDay } from '@/utils';

import { IReviewModalContentProps } from './ReviewModalContent.types';

const ReviewModalContent: React.FC<IReviewModalContentProps> = ({
  title,
  description,
  name,
  date,
}) => {
  return (
    <div className='h-[95%] px-4 pb-[34px] pt-[52px] md:px-6 md:pb-[54px] md:pt-[64px] xl:pt-[72px]'>
      <h3 className='mb-4 text-center font-inter text-light font-bold text-dark md:mb-6 md:text-large'>
        {title}
      </h3>
      <div className='scroll-bar-custom h-[95%]'>
        <p className='mb-6 pr-4 text-center font-inter text-light text-dark md:mb-10 md:pr-6 md:text-medium xl:mb-8 xl:leading-[1.50]'>
          {description}
        </p>
        <h4 className='mb-[6px] text-center font-inter text-[12px] font-bold leading-[1.30] text-dark md:mb-2 md:text-[14px]'>
          {name}
        </h4>
        <p className='text-center font-inter text-[12px] font-medium leading-[1.30] text-darkGreen'>
          {formatDateYearMonthDay(date)}
        </p>
      </div>
    </div>
  );
};

export default ReviewModalContent;
