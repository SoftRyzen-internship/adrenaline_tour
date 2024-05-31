import SliderGallery from '@/components/common/SliderGallery';
import CardGallery from '@/components/ui/CardGallery';
import { gallery } from '@/data';

const slides = gallery.images.map(({ id, src, alt }) => ({
  id: id,
  content: <CardGallery key={id} src={src} alt={alt} />,
}));

const Gallery = () => {
  return (
    <section className='section'>
      <div className='container'>
        <h2 className='section-title mb-[38px] pt-[6px] md:mb-16 md:pt-2 xl:mb-[69px] xl:pt-[13px]'>
          {gallery.title}
        </h2>
      </div>
      <SliderGallery slides={slides} />
    </section>
  );
};

export default Gallery;
