import { ITourRentQueryResponse } from '@/@types';

import fetchData from '../fetchData';
import { getTourRent as query } from '../query';

const fetchTourRent = async (slug: string) => {
  const variables = { slug };
  const result = (await fetchData(query, variables)) as ITourRentQueryResponse;

  return result.tours.data[0]?.attributes.rent;
};

export default fetchTourRent;
