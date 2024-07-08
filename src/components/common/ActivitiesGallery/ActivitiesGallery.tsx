import ActivitiesCard from '@/components/common/ActivitiesCard/ActivitiesCard';
import { activities } from '@/data';

import s from './ActivitiesGallery.module.css';

const firstColumnCards = activities.images.slice(
  0,
  Math.ceil(activities.images.length / 2),
);
const secondColumnCards = activities.images.slice(
  Math.ceil(activities.images.length / 2),
);
const ActivitiesGallery = () => {
  return (
    <div className='grid grid-cols-2 gap-4 md:gap-8 xl:gap-7'>
      <div className={s.firstColumnCards}>
        {firstColumnCards.map(card => (
          <ActivitiesCard
            position='justify-end'
            key={card.id}
            id={card.id}
            src={card.src}
            alt={card.alt}
            text={card.text}
          />
        ))}
      </div>

      <div className={s.secondColumnCards}>
        {secondColumnCards.map(card => (
          <ActivitiesCard
            position='justify-start'
            key={card.id}
            id={card.id}
            src={card.src}
            alt={card.alt}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivitiesGallery;
