import { IGalleryResponse } from '@/@types';

import fetchData from '../fetchData';
import { getGallery as query } from '../query';

const fetchGallery = async () => {
  const result = (await fetchData(query)) as IGalleryResponse;

  return result.gallery.data.attributes.images.data;
};

export default fetchGallery;
