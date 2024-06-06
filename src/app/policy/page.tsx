import type { Metadata } from 'next';

import { Pages } from '@/@types';
import Observer from '@/components/common/Observer';
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
      <h1 className='h-24 text-center text-6xl text-gray-400'>
        PolicyPage will be here
      </h1>
      <Observer />
    </>
  );
};

export default PolicyPage;
