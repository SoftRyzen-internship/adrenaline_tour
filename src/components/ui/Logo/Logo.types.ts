export interface ILogoSvgProps {
  textColor?: 'white' | 'green';
  width: string;
  height: string;
}

export interface ILogoProps {
  textColor?: 'white' | 'green';
  width: string;
  height: string;
  toScroll?: boolean;
  onClick?: () => void;
}
