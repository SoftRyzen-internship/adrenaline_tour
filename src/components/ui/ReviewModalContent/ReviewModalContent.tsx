import { IReviewModalContentProps } from './ReviewModalContent.types';

const ReviewModalContent: React.FC<IReviewModalContentProps> = ({
  title,
  description,
  name,
  date,
}) => {
  return (
    <div className='px-4 pb-[34px] pt-[52px] md:px-6 md:pb-[54px] md:pt-[64px] xl:pt-[72px]'>
      <h3 className='mb-4 text-center font-inter text-light font-bold text-dark md:mb-6 md:text-large'>
        {title}
      </h3>
      <p className='mb-6 text-center font-inter text-light text-dark md:mb-10 md:text-medium xl:mb-8 xl:leading-[1.50]'>
        {description}
      </p>
      <h4 className='mb-[6px] text-center font-inter text-[12px] font-bold leading-[1.30] text-dark md:mb-2 md:text-[14px]'>
        {name}
      </h4>
      <p className='text-center font-inter text-[12px] font-medium leading-[1.30] text-darkGreen'>
        {date}
      </p>
    </div>
  );
};

export default ReviewModalContent;
