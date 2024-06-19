import { ITourGalleryData, ITourGalleryQueryResponse } from '@/@types';

import fetchData from '../fetchData';
import { getTourGallery as query } from '../query';

const fetchTourGallery = async (slug: string): Promise<ITourGalleryData[]> => {
  const variables = { slug };
  const result = (await fetchData(
    query,
    variables,
  )) as ITourGalleryQueryResponse;

  return result.tours.data[0]?.attributes.gallery.data;
};

export default fetchTourGallery;
