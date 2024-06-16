'use client';

import TourImg from '@/components/ui/TourImg';

export interface ISingleTourPageProps {
  params: { slug: string };
}

const Page: React.FC<ISingleTourPageProps> = ({ params }) => {
  console.log(params.slug);
  return <TourImg slug={params.slug} />;
};

export default Page;
