import type { Metadata } from 'next';

import { Pages } from '@/@types';
import { metaData } from '@/data';
import PolicySection from '@/sections/PolicySection';

export const metadata: Metadata = {
  title: metaData.policyTitle,
  alternates: {
    canonical: Pages.POLICY,
  },
};

const PolicyPage = () => {
  return <PolicySection />;
};

export default PolicyPage;
