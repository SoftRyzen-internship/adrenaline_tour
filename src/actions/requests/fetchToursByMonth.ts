import fetchData from '../fetchData';
import { getToursByMonth } from '../query';

const fetchToursByMonth = async (startOfMonth: string, endOfMonth: string) => {
  const query = getToursByMonth;
  const variables = {
    startOfMonth,
    endOfMonth,
  };

  const result = await fetchData(query, variables);

  return result.tours.data;
};

export default fetchToursByMonth;
