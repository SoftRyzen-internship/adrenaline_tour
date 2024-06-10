import type { Metadata } from 'next';

import { Pages } from '@/@types';
import { metaData } from '@/data';
import Policy from '@/sections/Policy';

export const metadata: Metadata = {
  title: metaData.policyTitle,
  alternates: {
    canonical: Pages.POLICY,
  },
};

const PolicyPage = () => {
  return <Policy />;
};

export default PolicyPage;
