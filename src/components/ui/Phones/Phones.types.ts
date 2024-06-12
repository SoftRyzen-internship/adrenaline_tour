export interface IPhonesProps {
  variant: 'contacts' | 'footer';
  className?: string;
}

export interface IContact {
  email: string;
  numbers: {
    [country: string]: string;
  };
}

interface ContactData {
  attributes: IContact;
}

export interface IContactResponse {
  contact: {
    data: ContactData;
  };
}
