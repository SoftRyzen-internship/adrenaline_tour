'use client';
import { useState } from 'react';

import BurgerMenuIcon from '/public/icons/burger-menu-sm.svg';

import BurgerMenu from '@/components/common/BurgerMenu';
import IconButton from '@/components/ui/IconButton';
import Modal from '@/components/ui/Modal';

const PolicyPage = () => {
  const [isOpenBurger, setIsOpenBurger] = useState(false);
  return (
    <>
      <h1 className='text-6xl'>PolicyPage will be here</h1>
      <IconButton
        ariaLabel='Відкрити Модалку'
        onClick={() => setIsOpenBurger(true)}
        className=' bg-yellow-900'
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
    </>
  );
};

export default PolicyPage;
