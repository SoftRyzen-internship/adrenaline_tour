import Image from 'next/image';

import { ariaLabel } from '@/data';

import { ITourImgProps } from './TourImg.types';

const TourImg: React.FC<ITourImgProps> = ({ data }) => {
  if (!data) {
    return;
  }
  const altText = data.alternativeText || ariaLabel.altAlternative;

  return (
    <div className='mb-10 md:container md:mb-[54px] xl:mb-[64px]'>
      <Image
        className='h-[320px] w-full object-cover md:h-[307px] xl:h-[450px]'
        src={data.url}
        width={360}
        height={320}
        priority
        alt={altText}
      />
    </div>
  );
};

export default TourImg;
