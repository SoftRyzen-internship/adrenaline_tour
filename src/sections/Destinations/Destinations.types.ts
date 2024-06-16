import { ISelectState, ITours } from '@/@types';

export interface ISelect {
  id: number;
  attributes: {
    name: string;
  };
}
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
      id: string;
      attributes: {
        name: string;
      };
    }[];
  };
  activities: {
    data: {
      id: string;
      attributes: {
        name: string;
      };
    }[];
  };
}

export interface ISelectedTours {
  pageSize: number;
  startDate?: Date;
  endDate?: Date;
}

export interface IFilterParams {
  startDate: Date | undefined;
  endDate: Date | undefined;
  country: string | undefined;
  activity: string | undefined;
}

export interface IFetchData {
  (params: {
    defaultSelected: ISelect;
    selected: ISelectState;
    page: number;
    pageSize: number;
    fetchType: 'activities' | 'countries';
  }): Promise<void>;
}
