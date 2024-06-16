import { Metadata } from 'next';

import { Pages } from '@/@types';
import { fetchTourMainInfo } from '@/actions/requests';
import Gallery from '@/sections/Gallery';
import Tour from '@/sections/Tour';
import { configuration } from '@/utils';

export interface ISingleTourPageProps {
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: ISingleTourPageProps): Promise<Metadata> {
  const { slug } = params;
  const { title } = await fetchTourMainInfo(slug);

  return {
    title: title,
    alternates: {
      canonical: `${configuration.BASE_APP_URL}${Pages.TOURS}/${slug}`,
    },
  };
}

const SingleTourPage: React.FC<ISingleTourPageProps> = ({ params }) => {
  return (
    <>
      <Tour slug={params.slug} />
      <Gallery />
    </>
  );
};

export default SingleTourPage;
