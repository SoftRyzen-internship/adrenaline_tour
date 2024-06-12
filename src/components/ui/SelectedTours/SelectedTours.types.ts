export interface ICountry {
  id: string;
  attributes: {
    name: string;
  };
}

export interface ICountryResponse {
  countries: {
    data: ICountry[];
  };
}

export interface ITour {
  id: string;
  attributes: {
    img: {
      data: {
        attributes: {
          alternativeText: string;
          url: string;
        };
      };
    };
    date: string;
    title: string;
    duration: string;
    slug: string;
    recommended: boolean;
    activities: {
      data: {
        id: string;
        attributes: {
          name: string;
        };
      }[];
    };
    countries: {
      data: {
        id: string;
        attributes: {
          name: string;
        };
      }[];
    };
  };
}

export interface ITourResponse {
  tours: {
    data: ITour[];
  };
}
