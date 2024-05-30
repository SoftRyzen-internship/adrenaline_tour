'use client';

import clsx from 'clsx';

import ArrowRight from '@/../public/icons/arrow-right.svg';
import ArrowRightDownIcon from '@/../public/icons/arrow-right_up.svg';
import BurgerMenuIcon from '@/../public/icons/burger-menu-sm.svg';
import CalendarIcon from '@/../public/icons/date.svg';
import FacebookIcon from '@/../public/icons/facebook.svg';
import Button from '@/components/ui/Button';
import IconButton from '@/components/ui/IconButton';
import LinkButton from '@/components/ui/LinkButton';
import { Logo } from '@/components/ui/Logo';
import MovingBanner from '@/components/ui/MovingBanner/MovingBanner';
import Phones from '@/components/ui/Phones';
import Social from '@/components/ui/Social';
import TourCard from '@/components/ui/TourCard';
import mockdatatourCard from '@/data/mockdatatourCard.json';

import DisclosureMain from '../Disclosure';

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

        <Logo textWhite={true} width={153} height={51} />
        <Logo textWhite={false} width={252} height={80} />
      </div>
      <section className='section'>
        <div className='container flex flex-wrap gap-8'>
          <TourCard data={mockdatatourCard} />
          <TourCard data={mockdatatourCard} />
          <TourCard data={mockdatatourCard} />
        </div>
      </section>
      <section className='section'>
        <MovingBanner />
      </section>

      {children}
      <p className='container text-center text-[24px] font-bold'>
        Component LinkButton
      </p>
      <div className='container flex flex-wrap gap-2 py-4'>
        <div>
          <p className='p-1 text-xs'>LinkButton - variant-main</p>
          <LinkButton href='#sectionId' variant='main'>
            Зв’яжіться з нами
          </LinkButton>
        </div>
        <div>
          <p className='p-1 text-xs'>
            variant-main, iconPosition-after, icon-(Your Icon)
          </p>
          <LinkButton
            href='pageName'
            variant='main'
            iconPosition='after'
            icon={
              <ArrowRightDownIcon width={24} height={24} className='h-6 w-6' />
            }
          >
            Зв’яжіться з нами{' '}
          </LinkButton>
        </div>
        <div>
          <p className='p-1 text-xs'>
            variant - main, iconPosition - before, icon-(Your Icon)
          </p>
          <LinkButton
            href='/'
            variant='main'
            iconPosition='before'
            icon={<CalendarIcon width={24} height={24} className='h-6 w-6' />}
          >
            Зв’яжіться з нами{' '}
          </LinkButton>
        </div>
        <div>
          <p className='p-1 text-xs'>
            variant - secondary, iconPosition - after, icon-(Your Icon)
          </p>
          <LinkButton
            href='/'
            variant='secondary'
            iconPosition='after'
            icon={<ArrowRight width={24} height={24} className='h-6 w-6' />}
          >
            Детальніше{' '}
          </LinkButton>
        </div>
        <div>
          <p className='p-1 text-xs'>LinkButton: variant - navLink</p>
          <LinkButton href='/' variant='navLink'>
            Головна
          </LinkButton>
        </div>
        <div className='bg-darkBlue px-4 py-4'>
          <p className='p-1 text-xs text-white'>variant - footer</p>
          <LinkButton href='/' variant='footer'>
            Політика конфіденціальності
          </LinkButton>
        </div>
      </div>
      <p className='container text-center text-[24px] font-bold'>
        Component Button
      </p>
      <div className='container flex flex-wrap gap-2 py-4'>
        <div>
          <p className='p-1 text-xs'>
            variant-main, iconPosition-after, icon-(Your Icon)
          </p>
          <Button
            variant='main'
            type='submit'
            iconPosition='after'
            icon={
              <ArrowRightDownIcon width={24} height={24} className='h-6 w-6' />
            }
          >
            Кнопка для форми
          </Button>
        </div>
        <div>
          <p className='p-1 text-xs'>
            variant - secondary, iconPosition - after, icon-(Your Icon)
          </p>
          <Button
            variant='secondary'
            iconPosition='after'
            icon={<ArrowRight width={16} height={16} className='h-4 w-4' />}
          >
            Детальніше{' '}
          </Button>
        </div>
        <div>
          <p className='p-1 text-xs'>variant-readMore-main</p>
          <Button type='button' variant='readMore-main'>
            Читати більше
          </Button>
        </div>
        <div>
          <p className='p-1 text-xs'>variant-readMore-secondary</p>
          <Button variant='readMore-secondary'>Читати далі</Button>
        </div>
      </div>
      <p className='container text-center text-[24px] font-bold'>
        Component IconButton
      </p>
      <div className='container flex flex-wrap gap-2 py-4'>
        <div className='bg-accentGreen px-4 py-4'>
          <p className='p-1 text-xs'>icon as children with own style</p>
          <IconButton ariaLabel='Відкрити Модалку'>
            <BurgerMenuIcon
              width={32}
              height={32}
              className='h-8 w-8 stroke-white transition hover:stroke-accentDefaultOrange'
            />
          </IconButton>
        </div>
        <div className='bg-accentGreen px-4 py-4'>
          <p className='p-1 text-xs'>icon as children with own style</p>
          <IconButton ariaLabel='Відкрити Модалку'>
            <FacebookIcon
              width={32}
              height={32}
              className='h-8 w-8 fill-white transition hover:fill-accentDefaultOrange'
            />
          </IconButton>
        </div>
      </div>
      <div className='container'>
        <DisclosureMain />
      </div>
    </div>
  );
};

export default Observer;
