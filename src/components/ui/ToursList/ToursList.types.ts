import { ITours } from '@/@types';

export interface IToursList {
  isLoading: boolean;
  filtersChanged: boolean;
  tours: ITours[];
  totalPages: number;
  quantityPerPage: number;
  currentPage: number;
  loadMore: () => void;
  resetVisibleTours: () => void;
}
