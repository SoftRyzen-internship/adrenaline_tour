import { IDisclosureItem } from '../DisclosureFaq/DisclosureFaq.types';

export interface IDisclosureItemProps {
  item: IDisclosureItem;
  handleClick: () => void;
  panelOpenId: number | null;
}
