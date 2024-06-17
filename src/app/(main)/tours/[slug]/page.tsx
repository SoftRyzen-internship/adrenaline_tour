import { Metadata } from 'next';

import { Pages } from '@/@types';
import { ISingleTourPageProps } from '@/@types';
import { fetchTourTitle } from '@/actions/requests';
import { configuration } from '@/utils';

export async function generateMetadata({
  params,
}: ISingleTourPageProps): Promise<Metadata> {
  const { slug } = params;
  const { title } = await fetchTourTitle(slug);

  return {
    title: title,
    alternates: {
      canonical: `${configuration.BASE_APP_URL}${Pages.TOURS}/${slug}`,
    },
  };
}

const SingleTourPage = () => {
  return <></>;
};

export default SingleTourPage;
