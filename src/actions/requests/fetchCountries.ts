import { ICountryResponse } from '../../components/ui/SelectedTours/SelectedTours.types';
import fetchData from '../fetchData';
import { getCountries } from '../query';

const fetchCountries = async () => {
  const query = getCountries;
  const result = (await fetchData(query)) as ICountryResponse;

  return result.countries.data;
};

export default fetchCountries;
