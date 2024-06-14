export enum Pages {
  MAIN = '/',
  CALENDAR = 'calendar',
  TOURS = 'tours',
  POLICY = 'policy',
}

export enum IdForScroll {
  HEADER = 'header',
  CONTACTS = 'contacts',
}

export interface IFormState {
  name: string;
  email: string;
  phone: string;
  message?: string | null;
  privacyPolicy: boolean;
}

export interface IHeroProps {
  page: Pages.MAIN | Pages.TOURS;
}

export interface IDisclosureItem {
  id: number;
  icon: boolean;
  margin: boolean;
  question: string;
  answers: {
    id: number;
    title: string;
    text: string[];
  }[];
}

export interface IDisclosure {
  id: number;
  label: string;
  sectionId: string;
  items: IDisclosureItem[];
}

export interface ISelectState {
  id: number;
  attributes: {
    name: string;
  };
}

export interface IActivity {
  id: string;
  attributes: {
    name: string;
  };
}

export interface ICountry {
  id: string;
  attributes: {
    name: string;
  };
}

export interface IImage {
  attributes: {
    url: string;
    alternativeText: string;
  };
}

export interface IToursAttributes {
  img: {
    data: {
      attributes: {
        url: string;
        alternativeText: string | null;
      };
    };
  };
  title: string;
  date: string;
  slug: string;
  duration: string;
  recommended: boolean;
  activities: {
    data: {
      attributes: {
        name: string;
      };
    }[];
  };
  countries: {
    data: {
      attributes: {
        name: string;
      };
    }[];
  };
}

export interface ITours {
  id: string;
  attributes: IToursAttributes;
}

export interface IAllToursProps {
  dataAllTours: ITours[];
}

export interface ITourResponse {
  tours: {
    data: ITours[];
  };
}

export interface ICountryResponse {
  countries: {
    data: ICountry[];
  };
}

export interface IActivitiesResponse {
  activities: {
    data: IActivity[];
  };
}

export interface IFeatureRow {
  id: number;
  caption: string;
  text: string | null;
  icon: string;
}
