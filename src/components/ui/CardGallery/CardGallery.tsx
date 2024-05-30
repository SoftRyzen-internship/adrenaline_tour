import Image from 'next/image';

import { ICardGalleryProps } from './CardGallery.types';

const CardGallery: React.FC<ICardGalleryProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={459}
      height={281}
      className='h-[281px] object-cover md:h-[347px] xl:h-[506px]'
    />
  );
};

export default CardGallery;
