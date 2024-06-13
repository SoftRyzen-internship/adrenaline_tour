import { ITourPlans } from './TourPlans.types';

const TourPlans: React.FC<ITourPlans> = ({ dataPlans }) => {
  const { plans } = dataPlans;

  return (
    <div className='container'>
      <div className='mb-12 xl:mb-16 xl:w-[652px]'>
        <h2 className='mb-8 font-unbounded text-[18px] font-bold leading-[1.30] text-additionalBlue md:text-[24px] md:leading-[1] xl:mb-10 xl:text-[32px]'>
          {plans.title}
        </h2>
        <p>{plans.description}</p>
      </div>
    </div>
  );
};

export default TourPlans;
