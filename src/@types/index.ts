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

export interface ITour {
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
    data: ISelectState[];
  };
  countries: {
    data: ISelectState[];
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

export interface ITourDetailsAttributesDetails {
  difficult: IDetailWithDescription;
  meet: IDetailWithLocation;
  price: IDetailWithDescription;
  route: IDetailWithDescription;
  seasons: IDetailWithDescription;
}

export interface ITourDetailsAttributes {
  details: ITourDetailsAttributesDetails;
}

export interface ITourDetails {
  id: string;
  attributes: ITourDetailsAttributes;
}

export interface ITourDetailsData {
  data: ITourDetails[];
}

export interface ITourDetailsResponse {
  tours: ITourDetailsData;
}

export interface IImgAttributes {
  alternativeText: string;
  url: string;
}

export interface IImgData {
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

export interface ITourAttributesPlans {
  description: string;
  title: string;
}

export interface ITourAttributesTourPlans {
  plans: ITourAttributesPlans;
}

export interface ITourPlans {
  attributes: ITourAttributesTourPlans;
}

export interface ITourPlansQueryResponse {
  tours: {
    data: ITourPlans[];
  };
}

export interface ITourAttributesRent {
  equipment: string;
  title: string;
}

export interface ITourAttributesTourRent {
  rent: ITourAttributesRent;
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

export interface ITourAttributesServices {
  features: IFeatures[];
  title: string;
}

export interface ITourAttributesTourServices {
  services: ITourAttributesServices;
}

export interface ITourServices {
  attributes: ITourAttributesTourServices;
}

export interface ITourServicesQueryResponse {
  tours: {
    data: ITourServices[];
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

export interface GalleryImages {
  data: IGallery[];
}

export interface GalleryAttributes {
  images: GalleryImages;
}

export interface GalleryData {
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

export interface IToursByMonthResponse {
  activities: {
    data: ISelectState[];
  };
  countries: {
    data: ISelectState[];
  };
  tours: {
    data: ITours[];
    meta: {
      pagination: { pageCount: number };
    };
  };
}

export interface IEmailAndPhone {
  email: string;
  numbers: {
    [country: string]: string;
  };
}

export interface IErrorProps {
  isLoadingError?: boolean;
}

export interface IContactResponse {
  contact: {
    data: { attributes: IEmailAndPhone };
  };
}

export interface ISingleTourPageProps {
  params: { slug: string };
}

export interface ITourTitle {
  title: string;
}

export interface ITourTitleAttributes {
  attributes: ITourTitle;
}

export interface ITourTitleQueryResponse {
  tours: {
    data: ITourTitleAttributes[];
  };
}

export interface ITourGalleryAttribut {
  url: string;
  alternativeText: string;
}

export interface ITourGalleryData {
  id: string;
  attributes: ITourGalleryAttribut;
}

export interface ITourGalleryGallery {
  data: ITourGalleryData[];
}

export interface ITourGalleryAttributes {
  gallery: ITourGalleryGallery;
}

export interface ITourGallery {
  id: string;
  attributes: ITourGalleryAttributes;
}

export interface ITourGalleryQueryResponse {
  tours: {
    data: ITourGallery[];
  };
}
