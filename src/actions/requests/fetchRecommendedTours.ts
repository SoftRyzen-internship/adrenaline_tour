import { ITourResponse } from '@/@types';

import fetchData from '../fetchData';
import { getAllTours as query } from '../query';

const fetchRecommendedTours = async () => {
  const variables = { recommended: true };
  const result = (await fetchData(query, variables)) as ITourResponse;

  return result.tours.data;
};

export default fetchRecommendedTours;
