import { ISelect } from '@/sections/Destinations/Destinations.types';

const mapDataToSelectItems = (
  dataItems: ISelect[],
  defaultSelect: ISelect,
): ISelect[] => {
  return [
    ...dataItems.map((item, index) => ({
      id: index + 1,
      attributes: { name: item.attributes.name },
    })),
    defaultSelect,
  ];
};

export default mapDataToSelectItems;
