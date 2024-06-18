import { IToursByMonthResponse } from '@/@types';

import fetchData from '../fetchData';
import { getFilteredTours as query } from '../query';

const fetchToursByMonth = async (
  startOfMonth: string,
  endOfMonth: string,
  filters: object,
) => {
  const variables = {
    startOfMonth,
    endOfMonth,
    ...filters,
  };

  const result = (await fetchData(query, variables)) as IToursByMonthResponse;
  console.log(result);

  return result;
};

export default fetchToursByMonth;
