import { ITourResponse } from '@/@types';

import fetchData from '../fetchData';
import { getAllTours as query } from '../query';

const fetchAllTours = async () => {
  const result = (await fetchData(query)) as ITourResponse;

  // const variables = {  pageSize: 100 };
  // const result = (await fetchData(query, variables)) as ITourResponse;
  // console.log(`tours ${JSON.stringify(result.tours.data)}`);
  return result.tours.data;
};

export default fetchAllTours;
