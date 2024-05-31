interface Slide {
  id: number | string;
  content: React.ReactNode;
}

export interface ISliderProps {
  slides: Slide[];
  section: 'upcomingTours' | 'reviews' | 'worthVisiting';
  className?: string;
}
