import {
  ISelect,
  ITourResponse,
} from '@/sections/Destinations/Destinations.types';

const getFilteringForSelect = (
  data: ITourResponse,
  fetchType: 'activities' | 'countries',
  defaultActivities: ISelect,
  defaultCountries: ISelect,
) => {
  const uniqueFiltering = new Set<string>();
  data.tours.data.forEach(tour => {
    const dataItems =
      fetchType === 'countries'
        ? tour.attributes.activities.data
        : tour.attributes.countries.data;

    dataItems.forEach(item => {
      uniqueFiltering.add(item.attributes.name);
    });
  });

  const defaultFiltering =
    fetchType === 'countries' ? defaultActivities : defaultCountries;
  const filteringForSelect = [
    ...Array.from(uniqueFiltering)
      .sort()
      .map((name, index) => ({
        id: index + 1,
        attributes: { name },
      })),
    defaultFiltering,
  ];
  return filteringForSelect;
};

export default getFilteringForSelect;
