import { Metadata } from 'next';

import { Pages } from '@/@types';
import { ISingleTourPageProps } from '@/@types';
import { fetchTourTitle } from '@/actions/requests';
import { ariaLabel } from '@/data';
import { configuration } from '@/utils';

export async function generateMetadata({
  params,
}: ISingleTourPageProps): Promise<Metadata> {
  const { slug } = params;
  try {
    const { title } = await fetchTourTitle(slug);

    if (!title) {
      throw new Error(ariaLabel.titleNotFound);
    }

    return {
      title: title,
      alternates: {
        canonical: `${configuration.BASE_APP_URL}${Pages.TOURS}/${slug}`,
      },
    };
  } catch (error) {
    return {
      title: ariaLabel.titleNotFound,
      alternates: {
        canonical: `${configuration.BASE_APP_URL}/404`,
      },
    };
  }
}

const SingleTourPage: React.FC<ISingleTourPageProps> = () => {
  return <></>;
};

export default SingleTourPage;
