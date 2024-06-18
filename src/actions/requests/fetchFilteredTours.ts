import { IToursByMonthResponse, IFilters } from '@/@types';

import fetchData from '../fetchData';
import { getFilteredTours as query } from '../query';

const fetchFilteredTours = async (
  variables: IFilters,
): Promise<IToursByMonthResponse> => {
  return (await fetchData(query, variables)) as IToursByMonthResponse;
};

export default fetchFilteredTours;
