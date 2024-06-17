import { ITourResponse } from '@/sections/Destinations/Destinations.types';

import fetchData from '../fetchData';
import { getFilteredTours as query } from '../query';

interface IFetchFilteredTours {
  countryName?: string;
  activityName?: string;
  startOfMonth?: Date;
  endOfMonth?: Date;
  page?: number;
  pageSize?: number;
}

const fetchFilteredTours = async (
  variables: IFetchFilteredTours,
): Promise<ITourResponse> => {
  const result = (await fetchData(query, variables)) as ITourResponse;
  return result;
};

export default fetchFilteredTours;
