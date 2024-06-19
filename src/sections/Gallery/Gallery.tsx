import { IGallery, SLIDER_THRESHOLD } from '@/@types';
import { fetchGallery } from '@/actions/requests';
import SliderGallery from '@/components/common/SliderGallery';
import AnimatedText from '@/components/ui/AnimatedText';
import CardGallery from '@/components/ui/CardGallery';
import Title from '@/components/ui/Title';
import { gallery } from '@/data';

const Gallery = async () => {
  const dataGallery: IGallery[] = await fetchGallery();
  const data = dataGallery ?? [];

  const shouldShowSlider = data.length >= SLIDER_THRESHOLD;

  const galleryContent = shouldShowSlider ? (
    <AnimatedText className='xl:[--x-hidden:80px]'>
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
    </AnimatedText>
  ) : (
    <AnimatedText className='xl:[--x-hidden:80px]'>
      <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
        {data.map(({ attributes }, index) => (
          <CardGallery
            key={index}
            src={attributes.url}
            alt={attributes.alternativeText}
          />
        ))}
      </div>
    </AnimatedText>
  );

  return (
    <section className='section'>
      <div className='container'>
        <Title className='section-title mb-[38px] pt-[6px] md:mb-16 md:pt-2 xl:mb-[69px] xl:pt-[13px]'>
          {gallery.title}
        </Title>
      </div>
      {galleryContent}
    </section>
  );
};

export default Gallery;
