import { IEmailAndPhone, IContactResponse } from '@/@types';

import fetchData from '../fetchData';
import { getContact as query } from '../query';

const fetchContacts = async (): Promise<IEmailAndPhone | null> => {
  const data = (await fetchData(query)) as IContactResponse;

  return data.contact.data.attributes;
};

export default fetchContacts;
