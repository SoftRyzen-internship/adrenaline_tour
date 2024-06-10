import { ISelectState } from '@/@types';

export interface ICustomSelectProps {
  data: ISelectState[];
  selectedItem: ISelectState;
  onChange: (item: ISelectState) => void;
  className?: string;
}
