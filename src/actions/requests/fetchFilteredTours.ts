import { IToursByMonthResponse } from '@/@types';

import fetchData from '../fetchData';
import { getFilteredTours as query } from '../query';

const fetchFilteredTours = async (filters: object) => {
  const variables = {
    ...filters,
  };

  const result = (await fetchData(query, variables)) as IToursByMonthResponse;

  return result;
};

export default fetchFilteredTours;
