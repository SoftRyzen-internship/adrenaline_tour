import fetchData from '../fetchData';
import { getGallery } from '../query';

const fetchGallery = async () => {
  const query = getGallery;
  const result = await fetchData(query);

  return result.gallery.data.attributes.images.data.slice(0, 10);
};

export default fetchGallery;
