import { Metadata } from 'next';

import { Pages } from '@/@types';
import { configuration } from '@/utils';

export interface ISingleTourPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: ISingleTourPageProps): Promise<Metadata> {
  const slug = params.slug;
  const response = await fetch(
    `${configuration.BASE_DATA_URL}${Pages.TOURS}/${slug}`,
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch tour data: ${response.statusText}`);
  }

  const tour = await response.json();

  return {
    title: tour.title,
    alternates: {
      canonical: `${configuration.BASE_APP_URL}tours/${slug}`,
    },
  };
}

const SingleTourPage: React.FC<ISingleTourPageProps> = ({ params }) => {
  return (
    <>
      <h1 className='bg-green-400 text-6xl'>
        Single Tour Page - {params.slug}
      </h1>
    </>
  );
};

export default SingleTourPage;
