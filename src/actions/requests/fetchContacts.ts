import { getContact } from '../query';

const API_URL = 'https://adrenaline-tour-admin.onrender.com/graphql';

const fetchContacts = async () => {
  const query = getContact;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const result = await response.json();
    return result.data.contact.data.attributes;
  } catch (error) {
    return null;
  }
};

export default fetchContacts;
