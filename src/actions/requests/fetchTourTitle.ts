import { ITourTitle, ITourTitleQueryResponse } from '@/@types';

import fetchData from '../fetchData';
import { getTourTitle as query } from '../query';

const fetchTourTitle = async (slug: string): Promise<ITourTitle> => {
  const variables = { slug };
  const result = (await fetchData(query, variables)) as ITourTitleQueryResponse;

  const title = result.tours.data[0].attributes.title;

  return { title };
};

export default fetchTourTitle;
