import { ISelectState } from '@/@types';
import { IFilterParams } from '@/sections/Destinations/Destinations.types';

const getParamsForSelectedTours = (
  selectedCountry: ISelectState,
  selectedActivity: ISelectState,
  defaultCountry: string,
  defaultActivity: string,
): IFilterParams => {
  const country: string | undefined =
    selectedCountry.attributes.name === defaultCountry
      ? undefined
      : selectedCountry.attributes.name;
  const activity: string | undefined =
    selectedActivity.attributes.name === defaultActivity
      ? undefined
      : selectedActivity.attributes.name;

  return { country, activity };
};

export default getParamsForSelectedTours;
