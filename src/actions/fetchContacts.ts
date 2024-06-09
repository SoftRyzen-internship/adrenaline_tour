const API_URL = 'https://adrenaline-tour-admin.onrender.com/graphql';

const fetchGetContacts = async () => {
  const query = `query getContact {
    contact {
      data {
        attributes{
          email 
          numbers {
            ua
            cz
          }
        }
      }
    }
  }`;

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
    const res = await response.json();
    return res.data.contact.data.attributes;
  } catch (error) {
    return null;
  }
};

export default fetchGetContacts;
