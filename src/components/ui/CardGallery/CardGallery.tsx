import Image from 'next/image';

import { ICardGalleryProps } from './CardGallery.types';

const CardGallery: React.FC<ICardGalleryProps> = ({ src, alt }) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={182}
        height={281}
        className='h-[281px] md:h-[347px] xl:h-[506px]'
      />
    </div>
  );
};

export default CardGallery;
