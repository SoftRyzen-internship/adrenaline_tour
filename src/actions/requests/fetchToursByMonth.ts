import { ITourResponse } from '@/@types';

import fetchData from '../fetchData';
import { getAllTours as query } from '../query';

const fetchToursByMonth = async (startOfMonth: string, endOfMonth: string) => {
  const variables = {
    startOfMonth,
    endOfMonth,
    pageSize: 9,
  };

  const result = (await fetchData(query, variables)) as ITourResponse;

  return result.tours.data;
};

export default fetchToursByMonth;