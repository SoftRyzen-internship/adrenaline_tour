import { ITourImgQueryResponse } from '@/@types';

import fetchData from '../fetchData';
import { getTourImg as query } from '../query';

const fetchTourImg = async (slug: string) => {
  const variables = { slug };
  const result = (await fetchData(query, variables)) as ITourImgQueryResponse;

  return result.tours.data[0]?.attributes.img.data.attributes;
};

export default fetchTourImg;
