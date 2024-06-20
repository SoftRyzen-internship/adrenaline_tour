import clsx from 'clsx';

import { IHeroProps } from '@/@types';
import HeroCard from '@/components/common/HeroCard';
import SliderHero from '@/components/common/SliderHero';

import s from './Hero.module.css';

const Hero: React.FC<IHeroProps> = ({ page }) => {
  return (
    <section className='relative -z-10 h-[640px] md:h-[780px]'>
      <div className={clsx('h-full', s.hero_bg)}>
        <SliderHero page={page} />
        <div className='container relative pt-[259px] md:pt-[264px] xl:pt-[224px]'>
          <HeroCard page={page} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
