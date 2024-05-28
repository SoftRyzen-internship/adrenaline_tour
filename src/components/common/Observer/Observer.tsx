import clsx from 'clsx';

import { Logo } from '@/components/ui/Logo';
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
      <Logo textColor='green' width='252px' height='80px' />
      <div className='section container bg-blueDefault'>
        <Social variant='header' />
        <Social variant='footer' />
        <Phones variant='contacts' />
        <Phones variant='footer' />
      </div>

      {children}
    </div>
  );
};

export default Observer;
