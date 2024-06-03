interface Slide {
  id: number | string;
  content: React.ReactNode;
}

export interface ISliderGalleryProps {
  slides: Slide[];
}
