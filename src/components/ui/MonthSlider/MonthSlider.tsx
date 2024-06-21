import AnimationContainer from '@/components/common/AnimationContainer';
import { calendar } from '@/data';
import { getMonthName } from '@/utils';

import { IMonthSliderProps } from './MonthSlider.types';

import IconButton from '../IconButton';

import LeftArrowIcon from '/public/icons/arrow-left.svg';
import RightArrowIcon from '/public/icons/arrow-right.svg';

const MonthSlider: React.FunctionComponent<IMonthSliderProps> = ({
  currentMonth,
  onMonthChange,
}) => {
  const monthName = getMonthName(currentMonth);
  const year = currentMonth.getFullYear();

  const currentDate = new Date();
  const maxMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 2,
    1,
  );

  const handlePrevMonth = () => {
    const prevMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() - 1,
      1,
    );
    onMonthChange(prevMonth);
  };

  const handleNextMonth = () => {
    const nextMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      1,
    );
    onMonthChange(nextMonth);
  };

  return (
    <AnimationContainer className='mb-6 flex items-center justify-center gap-4 border-b-[0.5px] border-accentDarkOrange pb-6 pt-4 md:pb-8 md:pt-6 xl:mb-0 xl:border-b-0 xl:py-[45px] xl:[--x-hidden:-80px]'>
      <IconButton
        type='button'
        ariaLabel={calendar.prev}
        onClick={handlePrevMonth}
        disabled={
          currentMonth.getMonth() === new Date().getMonth() &&
          currentMonth.getFullYear() === new Date().getFullYear()
        }
      >
        <LeftArrowIcon
          width={24}
          height={24}
          className='size-6 fill-accentDefaultOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:size-12 xl:size-16'
        />
      </IconButton>

      <span className='font-unbounded font-bold text-blueDefault md:text-2xl xl:text-[32px]'>{`${monthName} ${year}`}</span>

      <IconButton
        type='button'
        ariaLabel={calendar.next}
        onClick={handleNextMonth}
        disabled={
          currentMonth.getMonth() === maxMonth.getMonth() &&
          currentMonth.getFullYear() === maxMonth.getFullYear()
        }
      >
        <RightArrowIcon
          width={24}
          height={24}
          className='size-6 fill-accentDefaultOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange md:size-12 xl:size-16'
        />
      </IconButton>
    </AnimationContainer>
  );
};

export default MonthSlider;
