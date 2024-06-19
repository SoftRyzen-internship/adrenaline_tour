import { SLIDER_THRESHOLD } from '@/@types';
import SliderGallery from '@/components/common/SliderGallery';
import CardGallery from '@/components/ui/CardGallery';
import { gallery } from '@/data';

import { ITourGalleryProps } from './TourGallery.types';

const TourGallery: React.FC<ITourGalleryProps> = ({ data }) => {
  if (data.length === 0 || !data) {
    return;
  }

  const shouldShowSlider = data.length >= SLIDER_THRESHOLD;

  const galleryContent = shouldShowSlider ? (
    <SliderGallery
      slides={data.map(({ attributes }, index) => ({
        id: index,
        content: (
          <CardGallery
            key={index}
            src={attributes.url}
            alt={attributes.alternativeText}
          />
        ),
      }))}
    />
  ) : (
    <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
      {data.map(({ attributes }, index) => (
        <CardGallery
          key={index}
          src={attributes.url}
          alt={attributes.alternativeText}
        />
      ))}
    </div>
  );

  return (
    <>
      <div className='container'>
        <h2 className='section-title mb-[38px] pt-[6px] md:mb-16 md:pt-2 xl:mb-[69px] xl:pt-[13px]'>
          {gallery.title}
        </h2>
      </div>
      {galleryContent}
    </>
  );
};

export default TourGallery;
