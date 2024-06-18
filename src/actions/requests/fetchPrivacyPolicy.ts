import { IPolicyResponse } from '@/sections/PolicySection/PolicySection.types';

import fetchData from '../fetchData';
import { getPolicy } from '../query';

const fetchPrivacyPolicy = async () => {
  const query = getPolicy;
  const result = (await fetchData(query)) as IPolicyResponse;

  return result.policy.data.attributes;
};

export default fetchPrivacyPolicy;
