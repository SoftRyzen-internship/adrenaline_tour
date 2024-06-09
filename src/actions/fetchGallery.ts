const API_URL = 'https://adrenaline-tour-admin.onrender.com/graphql';

const fetchGallery = async () => {
  const query = `query getGallery {
    gallery {
      data {
        attributes{
          images {
            data {
              id
              attributes {
                url
                alternativeText
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
    return res.data.gallery.data.attributes.images.data.slice(0, 10);
  } catch (error) {
    return null;
  }
};

export default fetchGallery;
