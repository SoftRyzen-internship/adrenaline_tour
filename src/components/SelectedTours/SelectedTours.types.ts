import { ITours } from '@/@types';

export interface ISelectedTours {
  isLoading: boolean;
  tours: ITours[];
  totalPages: number;
  pageSize: number;
  currentPage: number;
  loadMore: () => void;
  resetVisibleTours: () => void;
}
