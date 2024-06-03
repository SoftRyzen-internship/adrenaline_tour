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
