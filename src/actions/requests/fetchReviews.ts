import { IReviewResponse } from '@/@types';

import fetchData from '../fetchData';
import { getReviews as query } from '../query';

const fetchReviews = async () => {
  const result = (await fetchData(query)) as IReviewResponse;

  return result.review.data.attributes.reviews;
};

export default fetchReviews;
