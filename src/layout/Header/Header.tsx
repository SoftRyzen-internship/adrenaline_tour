'use client';

import { useState } from 'react';

import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

import { IdForScroll, Pages } from '@/@types';
import BurgerMenu from '@/components/common/BurgerMenu';
import IconButton from '@/components/ui/IconButton';
import Logo from '@/components/ui/Logo';

import BurgerMenuIcon from '/public/icons/burger-menu-sm.svg';

import { header } from '@/data';

const Modal = dynamic(() => import('@/components/ui/Modal'));

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const isTextWhite = pathname === Pages.MAIN || pathname.includes(Pages.TOURS);

  return (
    <>
      <header id={IdForScroll.HEADER} className='absolute right-0 top-0 w-full'>
        <div className='container flex items-center justify-between py-6 xl:py-8'>
          <Logo
            textWhite={isTextWhite}
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
              className={`transition hover:stroke-accentDefaultOrange focus:stroke-accentDefaultOrange active:stroke-accentDarkOrange md:h-10 xl:w-12 ${isTextWhite ? 'stroke-white' : 'stroke-darkBlue'}`}
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
