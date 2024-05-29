import clsx from 'clsx';

import MovingBanner from '@/components/ui/MovingBanner/MovingBanner';
import Phones from '@/components/ui/Phones';
import Social from '@/components/ui/Social';

import s from './Observer.module.css';
import { IObserverProps } from './Observer.types';

const Observer: React.FC<IObserverProps> = ({ children }) => {
  return (
    <div>
      <h1
        className={clsx(
          'text-center text-2xl text-blue-800',
          children && s['text-color'],
        )}
      >
        The temporary component is used for the observation of newly created
        components.
      </h1>
      <div className='section container bg-blueDefault'>
        <Social variant='header' />
        <Social variant='footer' />
        <Phones variant='contacts' />
        <Phones variant='footer' />
      </div>
      <section className='section'>
        <MovingBanner />
      </section>

      {children}
    </div>
  );
};

export default Observer;
