import { ITourResponse } from '@/@types';

import fetchData from '../fetchData';
import { getAllTours } from '../query';

const fetchAllTours = async () => {
  const query = getAllTours;
  const result = (await fetchData(query)) as ITourResponse;

  return result.tours.data.slice(0, 10);
};

export default fetchAllTours;
