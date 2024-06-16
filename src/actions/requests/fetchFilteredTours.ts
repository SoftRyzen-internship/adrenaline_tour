import fetchData from '../fetchData';
import { getFilteredTours as query } from '../query';

import { ITourResponse } from '@/components/ui/SelectedTours/SelectedTours.types';

const fetchFilteredTours = async (
  countryName?: string,
  activityName?: string,
  startOfMonth?: Date,
  endOfMonth?: Date,
  page?: number,
  pageSize?: number,
): Promise<ITourResponse> => {
  const variables = {
    countryName,
    activityName,
    startOfMonth,
    endOfMonth,
    page,
    pageSize,
  };

  const result = (await fetchData(query, variables)) as ITourResponse;

  return result;
};

export default fetchFilteredTours;
