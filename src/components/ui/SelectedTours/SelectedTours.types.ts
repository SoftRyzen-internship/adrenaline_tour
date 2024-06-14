import { ITours } from '@/@types';

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
