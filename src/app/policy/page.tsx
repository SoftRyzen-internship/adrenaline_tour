'use client';

import { useEffect } from 'react';

import axios from 'axios';

import Observer from '@/components/common/Observer';

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

const PolicyPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const policyData = await getPolicyData();
      console.log(policyData); // Виводить дані в консоль
    };

    fetchData();
  }, []);
  return (
    <>
      <h1 className='text-6xl'>PolicyPage will be here</h1>
      <Observer />
    </>
  );
};

export default PolicyPage;
