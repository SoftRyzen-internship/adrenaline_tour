import { ITours } from '@/@types';

// import { configuration } from '@/utils';
const API_URL = 'https://adrenaline-tour-admin.onrender.com/graphql';

const fetchUpcomingTours = async () => {
  const query = `query getAllTours {
  tours {
    data {
      id
      attributes {
        img {
          data {
            attributes {
              alternativeText
              url
            }
          }
        }
        date
        title
        duration
        slug
        recommended
        activities {
          data {
            id
            attributes {
              name
            }
          }
        }
        countries {
          data {
            id
            attributes {
              name
            }
          }
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
    const currentDate = new Date();
    const data: ITours[] = res.data.tours.data.slice(0, 10);
    const upcomingTours = data
      .filter(item => new Date(item.attributes.date) >= currentDate)
      .sort(
        (a, b) =>
          new Date(a.attributes.date).getTime() -
          new Date(b.attributes.date).getTime(),
      );
    return upcomingTours;
  } catch (error) {
    return null;
  }
};

export default fetchUpcomingTours;
