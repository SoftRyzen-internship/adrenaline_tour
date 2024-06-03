import Image from 'next/image';

import { ICardGalleryProps } from './CardGallery.types';

const CardGallery: React.FC<ICardGalleryProps> = ({ src, alt }) => {
  return (
    <div className='relative h-[281px] overflow-hidden md:h-[347px] xl:h-[506px]'>
      <Image
        src={src}
        alt={alt}
        fill
        quality={80}
        className='h-auto w-full object-cover'
        sizes='(max-width: 767px) 66vw, (max-width: 1279px) 40vw, 28vw'
      />
    </div>
  );
};

export default CardGallery;
