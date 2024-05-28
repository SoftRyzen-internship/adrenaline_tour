import Image from 'next/image';

import { ITourCardProps } from './TourCard.types';

const TourCard: React.FC<ITourCardProps> = ({ data }) => {
  const { imgSrc, alt, title, date, location, type, duration, link } = data;

  return (
    <div>
      <Image src={imgSrc} width={328} height={291} alt={alt} />
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{location}</p>
      <p>{type}</p>
      <p>{duration}</p>
      <a href={link}>More details</a>
    </div>
  );
};

export default TourCard;
