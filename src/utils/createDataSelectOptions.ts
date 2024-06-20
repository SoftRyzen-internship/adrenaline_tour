import { ISelectState } from '@/@types';

const createDataSelectOptions = (
  data: ISelectState[],
  defaultValue: string,
): ISelectState[] => {
  const defaultOption: ISelectState = {
    id: -1,
    attributes: { name: defaultValue },
  };
  const sortedData = data.sort((a, b) =>
    a.attributes.name.localeCompare(b.attributes.name, undefined, {
      sensitivity: 'base',
    }),
  );
  return [...sortedData, defaultOption];
};

export default createDataSelectOptions;
