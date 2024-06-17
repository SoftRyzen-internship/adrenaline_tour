import { ITourDetailsAttributes, ITourDetailsResponse } from '@/@types';

import fetchData from '../fetchData';
import { getTourDetails as query } from '../query';

const fetchTourDetails = async (
  slug: string,
): Promise<ITourDetailsAttributes> => {
  const result = (await fetchData(query, { slug })) as ITourDetailsResponse;

  return result.tours.data[0].attributes;
};

export default fetchTourDetails;
