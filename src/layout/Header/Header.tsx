'use client';

import { useState } from 'react';

import { IdForScroll } from '@/@types';
import BurgerMenu from '@/components/common/BurgerMenu';
import IconButton from '@/components/ui/IconButton';
import Logo from '@/components/ui/Logo';

import BurgerMenuIcon from '/public/icons/burger-menu-sm.svg';

import Modal from '@/components/ui/Modal';
import { header } from '@/data';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header id={IdForScroll.HEADER} className='absolute w-full'>
        <div className='container flex items-center justify-between py-6 xl:py-8'>
          <Logo
            textWhite
            width={126}
            height={40}
            className='h-[40px] w-[126px] md:h-[64px] md:w-[201px] xl:h-[80px] xl:w-[252px]'
          />
          <IconButton
            ariaLabel={header.ariaLabel}
            onClick={() => setIsModalOpen(true)}
          >
            <BurgerMenuIcon
              width={24}
              height={24}
              className='h-6 w-6 stroke-white transition hover:stroke-accentDefaultOrange focus:stroke-accentDefaultOrange md:h-10 md:h-12 md:w-10 md:w-12'
            />
          </IconButton>
        </div>
      </header>
      <Modal
        isOpen={isModalOpen}
        variant='burger'
        close={() => setIsModalOpen(false)}
      >
        <BurgerMenu onCloseMenu={() => setIsModalOpen(false)} />
      </Modal>
    </>
  );
};

export default Header;
