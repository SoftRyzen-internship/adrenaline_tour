import { ISelectState } from '@/@types';

const mapDataToSelectItems = (
  dataItems: ISelectState[],
  defaultSelect: ISelectState,
): ISelectState[] => {
  return [
    ...dataItems.map((item, index) => ({
      id: index + 1,
      attributes: { name: item.attributes.name },
    })),
    defaultSelect,
  ];
};

export default mapDataToSelectItems;
