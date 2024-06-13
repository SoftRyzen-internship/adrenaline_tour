import { ITourServicesQueryResponse } from '@/@types';

import fetchData from '../fetchData';
import { getTourServices as query } from '../query';

const fetchTourServices = async (slug: string) => {
  const variables = { slug };
  const result = (await fetchData(
    query,
    variables,
  )) as ITourServicesQueryResponse;

  return result?.tours?.data[0]?.attributes?.services ?? null;
};

export default fetchTourServices;
