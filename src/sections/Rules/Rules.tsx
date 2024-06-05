import Slider from '@/components/common/Slider';
import CardRule from '@/components/ui/CardRule';
// import BenefitsLightning from '/public/icons/instagram.svg';
// import BenefitsPlant from '/public/icons/instagram.svg';
// import BenefitsVagetables from '/public/icons/hiking.svg';
// import BenefitsVagetables from '/public/icons/health.svg';
import { rules } from '@/data';

const slides = rules.rules.map(({ id, title, description }) => ({
  id: id,
  content: <CardRule key={id} title={title} description={description} />,
}));

const Rules = () => {
  return (
    <section className='section container'>
      <h2 className='section-title mb-8 w-[194px]'>{rules.title}</h2>
      <Slider slides={slides} section='upcomingTours' />
    </section>
  );
};

export default Rules;
