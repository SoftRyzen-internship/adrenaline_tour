import { ITours } from '@/@types';

export interface IToursList {
  to: string;
  isLoading: boolean;
  isLoadMore: boolean;
  filtersChanged: boolean;
  tours: ITours[];
  quantityPerPage: number;
  loadMore: () => void;
  resetVisibleTours: () => void;
}
