import { ITourResponse } from '@/components/ui/SelectedTours/SelectedTours.types';

import fetchData from '../fetchData';
import { getFilteredTours as query } from '../query';

const fetchFilteredTours = async (
  countryName?: string,
  activityName?: string,
  startOfMonth?: Date,
  endOfMonth?: Date,
  page?: number,
  pageSize?: number,
): Promise<ITourResponse> => {
  const variables = {
    countryName: countryName,
    activityName: activityName,
    startOfMonth: startOfMonth,
    endOfMonth: endOfMonth,
    page: page,
    pageSize: pageSize,
  };

  const result = (await fetchData(query, variables)) as ITourResponse;

  return result;
};

export default fetchFilteredTours;
