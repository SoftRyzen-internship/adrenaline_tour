import { GraphQLClient, gql } from 'graphql-request';

import { IEmailAndPhone, IContactResponse } from '@/@types';

import { getContact } from '../query';

const API_URL = 'https://adrenaline-tour-admin.onrender.com/graphql';

const client = new GraphQLClient(API_URL);

const fetchContacts = async (): Promise<IEmailAndPhone | null> => {
  const query = gql`
    ${getContact}
  `;

  try {
    const data = await client.request<IContactResponse>(query);
    return data.contact.data.attributes;
  } catch (error) {
    return null;
  }
};

export default fetchContacts;
