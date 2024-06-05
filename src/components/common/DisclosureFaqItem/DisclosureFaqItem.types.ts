import {
  IDisclosure,
  INewPanel,
} from '../DisclosureFaqList/DisclosureFaqList.types';

export interface IDisclosureFaqItemProps {
  disclosure: IDisclosure;
  activeDisclosurePanel: INewPanel | null;
  handleToggle: (panel: INewPanel) => void;
}
