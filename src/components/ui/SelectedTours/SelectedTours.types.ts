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

export interface IResponseData {
  tours: {
    data: ITour[];
  };
}

export interface IFormattedTour {
  id: string;
  imgSrc: string;
  alt: string;
  title: string;
  date: string;
  location: string[];
  type: string[];
  duration: string;
  link: string;
}
