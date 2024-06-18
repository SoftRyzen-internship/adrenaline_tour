import CircleIcon from '/public/icons/circle.svg';
import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';

import { selectedTours } from '@/data';

import ErrorComponent from '../ErrorComponent';
import TourCard from '../TourCard';

import Button from '@/components/ui/Button';
import LinkButton from '@/components/ui/LinkButton';

import { IToursList } from './ToursList.types';

const ToursList: React.FC<IToursList> = ({
  isLoading,
  filtersChanged,
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
          <CircleIcon
            width={40}
            height={40}
            className='h-10 w-10 animate-spin'
          />
        </div>
      ) : tours.length > 0 ? (
        <div className='mb-10 grid gap-[32px] md:mb-14 md:grid-cols-2  md:gap-x-[32px] md:gap-y-[40px] xl:mb-16  xl:grid-cols-3'>
          {tours.map((tour, index) => (
            <TourCard key={index} data={tour} />
          ))}
        </div>
      ) : (
        filtersChanged &&
        tours.length === 0 && <ErrorComponent isLoadingError />
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
                  className='h-6 w-6 animate-spin md:mr-2 md:h-8 md:w-8'
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
              to='calendar'
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

export default ToursList;
