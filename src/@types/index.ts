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
  activities: {
    data: IActivity[];
  };
  countries: {
    data: ICountry[];
  };
  date: string;
  duration: string;
  img: {
    data: IImage;
  };
  recommended: boolean;
  slug: string;
  title: string;
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

export interface IFeatureRow {
  id: number;
  caption: string;
  text: string | null;
  icon: string;
}

export interface ITourProps {
  slug: string;
}

interface IImgAttributes {
  alternativeText: string;
  url: string;
}

interface IImgData {
  id: string;
  attributes: IImgAttributes;
}

interface ITourImgAttributes {
  img: {
    data: IImgData;
  };
}

interface ITourImg {
  id: string;
  attributes: ITourImgAttributes;
}

export interface ITourImgQueryResponse {
  tours: {
    data: ITourImg[];
  };
}

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
  attributes: ITourAttributesMainInfo;
}

export interface ITourMainInfoQueryResponse {
  tours: {
    data: ITourMainInfo[];
  };
}

export interface ITourAttributesTourPlans {
  plans: {
    description: string;
    title: string;
  };
}

export interface ITourPlans {
  attributes: ITourAttributesTourPlans;
}

export interface ITourPlansQueryResponse {
  tours: {
    data: ITourPlans[];
  };
}

export interface ITourAttributesTourRent {
  rent: {
    equipment: string;
    title: string;
  };
}

export interface ITourRent {
  attributes: ITourAttributesTourRent;
}

export interface ITourRentQueryResponse {
  tours: {
    data: ITourRent[];
  };
}

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
  attributes: ITourAttributesTourServices;
}

export interface ITourServicesQueryResponse {
  tours: {
    data: ITourServices[];
  };
}
