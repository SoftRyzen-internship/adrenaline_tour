'use client';

import { useEffect, useState } from 'react';

import axios from 'axios';
// import type { Metadata } from 'next';

// import { Pages } from '@/@types';
// import { metaData } from '@/data';

// export const metadata: Metadata = {
//   title: metaData.policyTitle,
//   alternates: {
//     canonical: Pages.POLICY,
//   },
// };

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
    <>
      {policy && (
        <>
          <h1>{policy.title}</h1>
          <p>{policy.text}</p>
        </>
      )}
    </>
  );
};

export default PolicyPage;
