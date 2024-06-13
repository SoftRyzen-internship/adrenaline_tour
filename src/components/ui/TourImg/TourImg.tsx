import Image from 'next/image';

import { ITourImgProps } from './TourImg.types';

const TourImg: React.FC<ITourImgProps> = ({ dataImg }) => {
  const { attributes } = dataImg;

  return (
    <div className='mb-10 md:container md:mb-[54px] md:pt-[128px] xl:mb-[64px] xl:pt-[160px]'>
      <Image
        className='h-[320px] w-full object-cover md:h-[307px] xl:h-[450px]'
        src={attributes.url}
        width={360}
        height={320}
        priority
        alt={attributes.alternativeText}
      />
    </div>
  );
};

export default TourImg;
