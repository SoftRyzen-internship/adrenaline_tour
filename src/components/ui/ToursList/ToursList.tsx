import CircleIcon from '/public/icons/circle.svg';
import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';

import { selectedTours } from '@/data';

import ErrorComponent from '../ErrorComponent';
import TourCard from '../TourCard';

import Button from '@/components/ui/Button';
import LinkButton from '@/components/ui/LinkButton';

import { IToursList } from './ToursList.types';

import LoadingComponent from '../LoadingComponent';
import AnimatedText from '../AnimatedText';

const ToursList: React.FC<IToursList> = ({
  to,
  isLoading,
  isLoadMore,
  filtersChanged,
  tours,
  quantityPerPage,
  loadMore,
  resetVisibleTours,
}) => {
  return (
    <div className='min-h-[400px] w-full xl:min-h-[485px]'>
      {isLoading && tours.length === 0 ? (
        <div className='pt-20'>
          <LoadingComponent />
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

      <div className='w-full justify-center md:flex'>
        {isLoadMore ? (
          <AnimatedText className='xl:[--y-hidden:-80px]'>
            <Button
              className='w-full px-4 md:h-[59px] md:w-[176px] md:px-8'
              variant='main'
              type='button'
              iconPosition='after'
              icon={
                isLoading ? (
                  <CircleIcon className='my-[2px] mr-1 size-6 animate-spin md:mr-2 md:size-8' />
                ) : (
                  <ArrowRightDownIcon className='size-6 rotate-90 md:size-8' />
                )
              }
              onClick={loadMore}
              disabled={isLoading}
            >
              {selectedTours.buttonMore}
            </Button>
          </AnimatedText>
        ) : (
          tours.length > quantityPerPage && (
            <AnimatedText className='xl:[--y-hidden:-80px]'>
              <LinkButton
                className='w-full px-4 md:w-[199px] md:px-8'
                variant='main'
                iconPosition='after'
                icon={<ArrowRightDownIcon className='size-6 md:size-8' />}
                toScroll
                to={to}
                onClick={resetVisibleTours}
              >
                {selectedTours.buttonLess}
              </LinkButton>
            </AnimatedText>
          )
        )}
      </div>
    </div>
  );
};

export default ToursList;
