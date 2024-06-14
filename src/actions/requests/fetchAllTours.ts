import { ITourResponse } from '@/@types';

import fetchData from '../fetchData';
import { getAllTours as query } from '../query';

const fetchAllTours = async () => {
  const result = (await fetchData(query)) as ITourResponse;

  return result.tours.data;
};

export default fetchAllTours;
