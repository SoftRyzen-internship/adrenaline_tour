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

export const SLIDER_THRESHOLD = 4;

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

export interface IDetailWithDescription {
  title: string;
  description: string;
}

export interface IDetailWithLocation {
  title: string;
  location: { place: string }[];
}

export interface ITourDetailsAttributes {
  details: {
    difficult: IDetailWithDescription;
    meet: IDetailWithLocation;
    price: IDetailWithDescription;
    route: IDetailWithDescription;
    seasons: IDetailWithDescription;
  };
}

export interface ITourDetails {
  id: string;
  attributes: ITourDetailsAttributes;
}

export interface ITourDetailsResponse {
  tours: {
    data: ITourDetails[];
  };
}

export interface IGalleryAttributes {
  url: string;
  alternativeText: string;
}

export interface IGallery {
  id: string;
  attributes: IGalleryAttributes;
}

interface GalleryImages {
  data: IGallery[];
}

interface GalleryAttributes {
  images: GalleryImages;
}

interface GalleryData {
  attributes: GalleryAttributes;
}

export interface IGalleryResponse {
  gallery: {
    data: GalleryData;
  };
}

export interface IReview {
  id: string;
  title: string;
  text: string;
  author: string;
  date: string;
}

interface ReviewAttributes {
  reviews: IReview[];
}

interface ReviewData {
  attributes: ReviewAttributes;
}

export interface IReviewResponse {
  review: {
    data: ReviewData;
  };
}

export interface IErrorProps {
  isLoadingError?: boolean;
}
