interface IImageData {
  _id: string;
  sm: string;
  md: string;
  lg: string;
  sm2x: string;
  md2x: string;
  lg2x: string;
}

export interface ISliderHeroProps {
  images: IImageData[];
}
