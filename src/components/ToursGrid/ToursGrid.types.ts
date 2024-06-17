import { ITours } from '@/@types';

export interface IToursGrid {
  isLoading: boolean;
  tours: ITours[];
  totalPages: number;
  quantityPerPage: number;
  currentPage: number;
  loadMore: () => void;
  resetVisibleTours: () => void;
}
