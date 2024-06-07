import { IDisclosureItem } from '@/@types';

export interface IDisclosureItemProps {
  item: IDisclosureItem;
  handleClick: () => void;
  panelOpenId: number | null;
}
