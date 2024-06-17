import CircleIcon from '/public/icons/circle.svg';
import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';

import { selectedTours } from '@/data';

import ErrorComponent from '../ui/ErrorComponent';
import TourCard from '../ui/TourCard';

import Button from '@/components/ui/Button';
import LinkButton from '@/components/ui/LinkButton';

import { ISelectedTours } from './SelectedTours.types';

const SelectedTours: React.FC<ISelectedTours> = ({
  isLoading,
  tours,
  totalPages,
  currentPage,
  quantityPerPage,
  loadMore,
  resetVisibleTours,
}) => {
  return (
    <>
      {isLoading && tours.length === 0 ? (
        <div className='flex h-full items-center justify-center'>
          <CircleIcon width={24} height={24} className='h-6 w-6 animate-spin' />
        </div>
      ) : tours.length > 0 ? (
        <div className='mb-10 grid gap-[32px] md:mb-14 md:grid-cols-2  md:gap-x-[32px] md:gap-y-[40px] xl:mb-16  xl:grid-cols-3'>
          {tours.map((tour, index) => (
            <div key={index} className='col-span-1'>
              <TourCard data={tour} />
            </div>
          ))}
        </div>
      ) : (
        <ErrorComponent />
      )}

      <div className='flex justify-center'>
        {totalPages > currentPage ? (
          <Button
            className='w-full px-[16px] md:h-[59px] md:w-[176px] md:px-[28px]'
            variant='main'
            type='button'
            iconPosition='after'
            icon={
              isLoading ? (
                <CircleIcon
                  width={24}
                  height={24}
                  className='h-6 w-6 animate-spin md:h-8 md:w-8'
                />
              ) : (
                <ArrowRightDownIcon
                  width={24}
                  height={24}
                  className='h-6 w-6 md:h-8 md:w-8'
                />
              )
            }
            onClick={loadMore}
            disabled={isLoading}
          >
            {selectedTours.buttonMore}
          </Button>
        ) : (
          tours.length > quantityPerPage && (
            <LinkButton
              className='w-full px-[16px] md:w-[199px] md:px-[28px]'
              variant='main'
              iconPosition='after'
              icon={
                <ArrowRightDownIcon
                  width={24}
                  height={24}
                  className='h-6 w-6 md:h-8 md:w-8'
                />
              }
              toScroll
              to='destinations'
              onClick={resetVisibleTours}
            >
              {selectedTours.buttonLess}
            </LinkButton>
          )
        )}
      </div>
    </>
  );
};

export default SelectedTours;
