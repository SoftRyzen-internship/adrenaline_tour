import { ITourMainInfoQueryResponse } from '@/@types';

import fetchData from '../fetchData';
import { getTourMainInfo as query } from '../query';

const fetchTourMainInfo = async (slug: string) => {
  const variables = { slug };
  const result = (await fetchData(
    query,
    variables,
  )) as ITourMainInfoQueryResponse;

  return result.tours.data[0]?.attributes;
};

export default fetchTourMainInfo;
