'use client';
import { useState } from 'react';

import clsx from 'clsx';

import ArrowRight from '/public/icons/arrow-right.svg';
import ArrowRightDownIcon from '/public/icons/arrow-right_up.svg';
import BurgerMenuIcon from '/public/icons/burger-menu-sm.svg';
import CalendarIcon from '/public/icons/date.svg';
import FacebookIcon from '/public/icons/facebook.svg';

import { IdForScroll } from '@/@types';
import BurgerMenu from '@/components/common/BurgerMenu';
import Button from '@/components/ui/Button';
import Checkbox from '@/components/ui/Checkbox';
import FormInput from '@/components/ui/FormInput';
import FormTextArea from '@/components/ui/FormTextArea';
import IconButton from '@/components/ui/IconButton';
import LinkButton from '@/components/ui/LinkButton';
import Logo from '@/components/ui/Logo';
import Modal from '@/components/ui/Modal';
import Phones from '@/components/ui/Phones';
import Social from '@/components/ui/Social';
import form from '@/data/form.json';

import HeroCard from '../HeroCard';

import s from './Observer.module.css';
import { IObserverProps } from './Observer.types';

const Observer: React.FC<IObserverProps> = ({ children }) => {
  const {
    formProps: { inputs, textarea, checkbox },
  } = form;
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  const [isOpenSimple, setIsOpenSimple] = useState(false);
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
        <HeroCard page='main' />
        <HeroCard page='tours' />
        <Social variant='header' />
        <Phones variant='contacts' />

        <Logo textWhite={false} width={252} height={80} />
      </div>
      <section className='section'>
        <div className='container flex flex-wrap gap-8'></div>
      </section>

      <section id={IdForScroll.CONTACTS} className='section bg-darkBlue'>
        <div className='container flex xl:justify-end'>
          <div className='flex w-full flex-col gap-12 xl:w-1/2'>
            {inputs.map(
              ({ name, placeholder, type, label, required }, index) => {
                return (
                  <FormInput
                    key={index}
                    label={label}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    required={required}
                  />
                );
              },
            )}
            <FormTextArea
              label={textarea.label}
              name={textarea.name}
              placeholder={textarea.placeholder}
            />
            <Checkbox name={checkbox.name} label={checkbox.label} />
          </div>
        </div>
      </section>

      {children}
      <p className='container text-center text-[24px] font-bold'>
        Component LinkButton
      </p>
      <div className='container flex flex-wrap gap-2 py-4'>
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
            <FacebookIcon
              width={32}
              height={32}
              className='h-8 w-8 fill-white transition hover:fill-accentDefaultOrange'
            />
          </IconButton>
        </div>
      </div>

      <p className='container text-center text-[24px] font-bold'>
        Component Modal
      </p>
      <div className='container bg-darkBlue px-4 py-4'>
        <p className='text-white'>variant - burger</p>
        <IconButton
          ariaLabel='Відкрити Модалку'
          onClick={() => setIsOpenBurger(true)}
        >
          <BurgerMenuIcon
            width={32}
            height={32}
            className='h-8 w-8 stroke-white transition hover:stroke-accentDefaultOrange'
          />
        </IconButton>
        <Modal
          isOpen={isOpenBurger}
          variant='burger'
          close={() => setIsOpenBurger(false)}
        >
          <BurgerMenu onCloseMenu={() => setIsOpenBurger(false)} />
        </Modal>
      </div>
      <div className='container bg-darkBlue px-4 py-4'>
        <p className='text-white'>variant - simple</p>
        <Button
          type='button'
          variant='readMore-main'
          onClick={() => setIsOpenSimple(true)}
        >
          Читати більше
        </Button>
        <Modal
          isOpen={isOpenSimple}
          variant='simple'
          close={() => setIsOpenSimple(false)}
        >
          <div className='p-10'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            corrupti corporis consequatur autem, libero omnis fugit earum natus
            nesciunt sunt illum repellat perferendis deleniti eum sed animi
            optio exercitationem. Perferendis molestiae est ex itaque
            perspiciatis minus, dolorum vero? Iure doloribus quisquam culpa
            consequatur velit adipisci quis dignissimos a. Vitae,
            exercitationem!
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Observer;
