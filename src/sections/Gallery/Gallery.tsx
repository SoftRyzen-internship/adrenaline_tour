import { fetchGallery } from '@/actions/requests';
import SliderGallery from '@/components/common/SliderGallery';
import CardGallery from '@/components/ui/CardGallery';
import { gallery } from '@/data';

import { IGallery } from './Gallery.types';

const Gallery = async () => {
  const dataGallery: IGallery[] = await fetchGallery();
  const data = dataGallery ?? [];

  const shouldShowSlider = data.length >= 4;

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
    <section className='section'>
      <div className='container'>
        <h2 className='section-title mb-[38px] pt-[6px] md:mb-16 md:pt-2 xl:mb-[69px] xl:pt-[13px]'>
          {gallery.title}
        </h2>
      </div>
      {galleryContent}
    </section>
  );
};

export default Gallery;
