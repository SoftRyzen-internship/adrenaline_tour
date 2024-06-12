import { ITourResponse } from '@/@types';

import fetchData from '../fetchData';
import { getToursByOption as query } from '../query';

const fetchDataForSelected = async (country?: string) => {
  const variables = { country: country };
  const result = (await fetchData(query, variables)) as ITourResponse;
  return result.tours.data;
};

export default fetchDataForSelected;
