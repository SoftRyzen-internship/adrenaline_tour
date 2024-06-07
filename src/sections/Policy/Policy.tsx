'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';

const API_URL = 'https://adrenaline-tour-admin.onrender.com/graphql';

export const getPolicyData = async () => {
  const query = `
    query getPolicy {
      policy {
        data {
          attributes {
            title
            text
          }
        }
      }
    }
  `;
  try {
    const response = await axios.post(API_URL, { query });
    return response.data.data.policy.data.attributes;
  } catch (error) {
    console.error('Error fetching policy data:', error);
    return null;
  }
};

const Policy = () => {
  const [policy, setPolicy] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const policyData = await getPolicyData();
      console.log(policyData);
      setPolicy(policyData);
    };

    fetchData();
  }, []);
  return (
    <section className='section'>
      <div className='container'>
        {policy && (
          <>
            <h1>{policy.title}</h1>
            <p>{policy.text}</p>
          </>
        )}
      </div>
    </section>
  );
};

export default Policy;
