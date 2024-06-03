interface IImageData {
  _id: string;
  src: string;
  alt: string;
}

export interface ISliderHeroProps {
  images: IImageData[];
}
