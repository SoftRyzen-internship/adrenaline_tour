import { format } from 'date-fns';
import { uk } from 'date-fns/locale';

const formatDateTours = (dateString: string): string => {
  const date = new Date(dateString);
  return format(date, 'dd MMMM', { locale: uk });
};

export default formatDateTours;
