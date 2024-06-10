import { configuration } from '@/utils';

const API_URL = `${configuration.BASE_DATA_URL}graphql`;

const fetchData = async (query: string, variables: object = {}) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query, variables }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    return null;
  }
};

export default fetchData;
