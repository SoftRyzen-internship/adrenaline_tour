import ActivitiesCard from '@/components/common/ActivitiesCard/ActivitiesCard';
import { activities } from '@/data';

import s from './ActivitiesGallery.module.css';

const ActivitiesGallery = () => {
  const firstColumnCards = activities.images.slice(
    0,
    Math.ceil(activities.images.length / 2),
  );
  const secondColumnCards = activities.images.slice(
    Math.ceil(activities.images.length / 2),
  );

  return (
    <div className='grid grid-cols-2 gap-[16px] md:gap-[32px] xl:gap-[28px]'>
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
