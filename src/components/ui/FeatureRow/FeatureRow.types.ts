import { ITourDetailsAttributes } from '@/@types';

export interface IFeatureRowProps {
  feature: {
    icon: string;
    details: ITourDetailsAttributes['details'][keyof ITourDetailsAttributes['details']];
  };
}
