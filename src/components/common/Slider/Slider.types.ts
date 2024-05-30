import { ReactNode } from 'react';

interface Slide {
  id: number | string;
  content: ReactNode;
}

export interface ISliderProps {
  slides: Slide[];
  isReview?: boolean;
}
