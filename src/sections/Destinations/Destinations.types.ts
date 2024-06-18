import { ITours } from '@/@types';

export interface ITourResponse {
  tours: {
    data: ITours[];
    meta: {
      pagination: {
        pageCount: number;
      };
    };
  };
  countries: {
    data: {
      id: number;
      attributes: {
        name: string;
      };
    }[];
  };
  activities: {
    data: {
      id: number;
      attributes: {
        name: string;
      };
    }[];
  };
}

export interface IFilterParams {
  country: string | undefined;
  activity: string | undefined;
}

export interface IFetchData {
  (params: 'countries' | 'activities'): Promise<void>;
}

export interface ISetSelectsList {
  (
    data: ITourResponse,
    country: string | undefined,
    activity: string | undefined,
  ): void;
}
