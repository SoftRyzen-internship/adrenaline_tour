import Image from 'next/image';

import { ITourProps } from '@/@types';
import { fetchTourImg } from '@/actions/requests';
import { ariaLabel } from '@/data';

const TourImg: React.FC<ITourProps> = async ({ slug }) => {
  const data = await fetchTourImg(slug);
  if (!data) {
    return;
  }
  const altText = data?.alternativeText || ariaLabel.altAlternative;

  return (
    <div className='mb-10 md:container md:mb-[54px] xl:mb-[64px]'>
      {data && (
        <Image
          className='h-[320px] w-full object-cover md:h-[307px] xl:h-[450px]'
          src={data.url}
          width={360}
          height={320}
          priority
          alt={altText}
        />
      )}
    </div>
  );
};

export default TourImg;
