import CircleIcon from '/public/icons/circle.svg';
import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';

import { selectedTours } from '@/data';

import ErrorComponent from '../ErrorComponent';
import TourCard from '../TourCard';

import Button from '@/components/ui/Button';
import LinkButton from '@/components/ui/LinkButton';

import { IToursList } from './ToursList.types';

const ToursList: React.FC<IToursList> = ({
  to,
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
    <div className='min-h-[400px] xl:min-h-[485px]'>
      {isLoading && tours.length === 0 ? (
        <div className='flex h-full items-center justify-center'>
          <CircleIcon className='size-10 animate-spin' />
        </div>
      ) : tours.length > 0 ? (
        <div className='mb-10 grid gap-8 md:mb-14 md:grid-cols-2 md:gap-y-10 xl:mb-16  xl:grid-cols-3'>
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
            className='w-full px-4 md:h-[59px] md:w-[176px] md:px-7'
            variant='main'
            type='button'
            iconPosition='after'
            icon={
              isLoading ? (
                <CircleIcon className='size-6 animate-spin md:mr-2 md:size-8' />
              ) : (
                <ArrowRightDownIcon className='size-6 md:size-8' />
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
              className='w-full px-4 md:w-[199px] md:px-7'
              variant='main'
              iconPosition='after'
              icon={<ArrowRightDownIcon className='size-6 md:size-8' />}
              toScroll
              to={to}
              onClick={resetVisibleTours}
            >
              {selectedTours.buttonLess}
            </LinkButton>
          )
        )}
      </div>
    </div>
  );
};

export default ToursList;
