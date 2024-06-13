export interface IFeatures {
  id: string;
  name: string;
  included: boolean;
}

export interface ITourAttributesTourServices {
  services: {
    features: IFeatures[];
    title: string;
  };
}

export interface ITourServices {
  dataServices: ITourAttributesTourServices;
}
