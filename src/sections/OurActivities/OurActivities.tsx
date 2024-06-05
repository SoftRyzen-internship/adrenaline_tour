import ActivitiesCard from '@/components/common/ActivitiesCard/ActivitiesCard';
import { activities } from '@/data';

const OurActivities: React.FC = () => {
  const firstColumnCards = activities.slice(
    0,
    Math.ceil(activities.length / 2),
  );
  const secondColumnCards = activities.slice(Math.ceil(activities.length / 2));
  return (
    <div className='grid grid-cols-2 gap-[16px] md:gap-[32px] xl:gap-[28px]'>
      <div className='flex flex-col gap-[16px] md:gap-[32px] xl:gap-[28px]'>
        {firstColumnCards.map(card => (
          <ActivitiesCard
            position='justify-end'
            key={card.id}
            id={card.id}
            src={card.src}
            alt={card.alt}
            width={card.width}
            height={card.height}
            sizes={card.sizes}
            text={card.text}
          />
        ))}
      </div>
      <div className='flex flex-col gap-[16px] md:gap-[32px] xl:gap-[28px]'>
        {secondColumnCards.map(card => (
          <ActivitiesCard
            position='justify-start'
            key={card.id}
            id={card.id}
            src={card.src}
            alt={card.alt}
            width={card.width}
            height={card.height}
            sizes={card.sizes}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
};

export default OurActivities;
