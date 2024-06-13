export interface IActivityMainInfo {
  id: string;
  attributes: {
    name: string;
  };
}

export interface ICountryMainInfo {
  id: string;
  attributes: {
    name: string;
  };
}

export interface ITourAttributesMainInfo {
  activities: {
    data: IActivityMainInfo[];
  };
  countries: {
    data: ICountryMainInfo[];
  };
  description: string;
  duration: string;
  title: string;
}

export interface ITourMainInfo {
  dataMainInfo: ITourAttributesMainInfo;
}
