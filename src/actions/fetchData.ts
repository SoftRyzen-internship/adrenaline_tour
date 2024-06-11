import { GraphQLClient, gql } from 'graphql-request';

import { configuration } from '@/utils';

const API_URL = `${configuration.BASE_DATA_URL}graphql`;

const client = new GraphQLClient(API_URL);

const fetchData = async (query: string, variables: object = {}) => {
  try {
    const data = await client.request(
      gql`
        ${query}
      `,
      variables,
    );
    return data;
  } catch (error) {
    return null;
  }
};

export default fetchData;
