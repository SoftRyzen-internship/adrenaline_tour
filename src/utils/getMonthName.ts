import { calendar } from '@/data';

const getMonthName = (date: Date) => {
  return calendar.allMonth[date.getMonth()];
};

export default getMonthName;
