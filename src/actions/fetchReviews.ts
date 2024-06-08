// import { configuration } from '@/utils';
const API_URL = 'https://adrenaline-tour-admin.onrender.com/graphql';

const fetchReviews = async () => {
  const query = `query getReviews {
    review {
      data {
        attributes{
          reviews {
            id
            title
            text
            author
            date
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
    return res.data.review.data.attributes.reviews;
  } catch (error) {
    return null;
  }
};

export default fetchReviews;
