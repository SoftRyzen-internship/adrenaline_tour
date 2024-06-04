import HeroCard from '@/components/common/HeroCard';
import SliderHero from '@/components/common/SliderHero';

import s from './Hero.module.css';
import { IHeroProps } from './Hero.types';

const Hero: React.FC<IHeroProps> = ({ page }) => {
  return (
    <section className={`relative h-[640px] md:h-[780px] ${s.hero_bg}`}>
      <SliderHero page={page} />
      <div className='container pt-[268px] md:pt-[264px] xl:pt-[224px]'>
        <HeroCard page={page} />
      </div>
    </section>
  );
};

export default Hero;
