import { getPolicy } from '../query';

const API_URL = 'https://adrenaline-tour-admin.onrender.com/graphql';

export const fetchPrivacyPolicy = async () => {
  const query = getPolicy;

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
    return result.data.policy.data.attributes;
  } catch (error) {
    console.error('Error fetching policy data:', error);
    return null;
  }
};
