import type { Metadata } from 'next';

import { Pages } from '@/@types';
import { metaData } from '@/data';

export const metadata: Metadata = {
  title: metaData.policyTitle,
  alternates: {
    canonical: Pages.POLICY,
  },
};

const PolicyPage = () => {
  return (
    <>
      <h1 className='text-6xl'>PolicyPage will be here</h1>
    </>
  );
};

export default PolicyPage;
