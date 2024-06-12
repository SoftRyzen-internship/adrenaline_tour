import IconButton from '../IconButton';

import LeftArrowIcon from '/public/icons/arrow-left.svg';
import RightArrowIcon from '/public/icons/arrow-right.svg';

interface IMonthBarProps {}

const getMonthName = date => {
  const monthNames = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ];
  return monthNames[date.getMonth()];
};

const MonthBar: React.FunctionComponent<IMonthBarProps> = ({
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
    <div className='flex items-center justify-center gap-4 pb-6 pt-8'>
      <IconButton
        type='button'
        ariaLabel='Test'
        onClick={handlePrevMonth}
        disabled={
          currentMonth.getMonth() === new Date().getMonth() &&
          currentMonth.getFullYear() === new Date().getFullYear()
        }
      >
        <LeftArrowIcon
          width={24}
          height={24}
          className='size-6 fill-accentDefaultOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange'
        />
      </IconButton>

      <span className='font-unbounded font-bold text-blueDefault'>{`${monthName} ${year}`}</span>

      <IconButton
        type='button'
        ariaLabel='Test'
        onClick={handleNextMonth}
        disabled={
          currentMonth.getMonth() === maxMonth.getMonth() &&
          currentMonth.getFullYear() === maxMonth.getFullYear()
        }
      >
        <RightArrowIcon
          width={24}
          height={24}
          className='size-6 fill-accentDefaultOrange transition hover:fill-accentDarkOrange focus:fill-accentDarkOrange active:fill-accentDarkOrange'
        />
      </IconButton>
    </div>
  );
};

export default MonthBar;
