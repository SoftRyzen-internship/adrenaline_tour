import type { Metadata } from 'next';

import Observer from '@/components/common/Observer';
import { metaData } from '@/data';

export const metadata: Metadata = {
  title: metaData.policyTitle,
  alternates: {
    canonical: 'policy',
  },
};

const PolicyPage = () => {
  return (
    <>
      <h1 className='text-6xl'>PolicyPage will be here</h1>
      <Observer />
    </>
  );
};

export default PolicyPage;
