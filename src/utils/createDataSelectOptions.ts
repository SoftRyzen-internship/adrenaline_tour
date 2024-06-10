import { ISelectState } from '@/@types';

const createDataSelectOptions = (
  data: ISelectState[],
  defaultValue: string,
): ISelectState[] => {
  const defaultOption: ISelectState = {
    id: -1,
    attributes: { name: defaultValue },
  };
  return [...data, defaultOption];
};

export default createDataSelectOptions;
