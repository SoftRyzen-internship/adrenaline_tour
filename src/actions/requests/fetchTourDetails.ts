import { ITourDetailsResponse } from '@/@types';

import fetchData from '../fetchData';
import { getTourDetails as query } from '../query';

const fetchTourDetails = async (slug: string) => {
  const result = (await fetchData(query, { slug })) as ITourDetailsResponse;

  return result.tours.data;
};

export default fetchTourDetails;
