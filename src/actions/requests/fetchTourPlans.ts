import { ITourAttributesPlans, ITourPlansQueryResponse } from '@/@types';

import fetchData from '../fetchData';
import { getTourPlans as query } from '../query';

const fetchTourPlans = async (slug: string): Promise<ITourAttributesPlans> => {
  const variables = { slug };
  const result = (await fetchData(query, variables)) as ITourPlansQueryResponse;

  return result.tours.data[0]?.attributes.plans;
};

export default fetchTourPlans;
