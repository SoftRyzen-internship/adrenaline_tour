import fetchData from '../fetchData';
import { getReviews } from '../query';

const fetchReviews = async () => {
  const query = getReviews;
  const result = await fetchData(query);

  return result.review.data.attributes.reviews.slice(0, 10);
};

export default fetchReviews;
