import { IActivitiesResponse } from '@/@types';

import fetchData from '../fetchData';
import { getActivities } from '../query';

const fetchActivities = async () => {
  const result = (await fetchData(getActivities)) as IActivitiesResponse;

  if (result && result.activities) {
    return result.activities.data;
  } else {
    throw new Error('Invalid response structure');
  }
};
export default fetchActivities;
