'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';

import LogoIcon from '/public/icons/logo.svg';

import { logo } from '@/data';

import { ILogoProps } from './Logo.types';

const Logo: React.FC<ILogoProps> = ({
  textWhite,
  width,
  height,
  toScroll,
  onClick,
}) => {
  return (
    <>
      {toScroll ? (
        <LinkScroll
          href='#'
          to='hero'
          smooth={true}
          spy={true}
          duration={500}
          offset={0}
          className='cursor-pointer focus:outline-1'
          aria-label={logo.ariaLabel}
        >
          <LogoIcon
            width={width}
            height={height}
            className={clsx(
              'inline-block fill-white  transition  hover:fill-accentDarkOrange hover:text-accentDarkOrange',
              textWhite ? 'text-white' : 'text-darkGreen',
            )}
          />
        </LinkScroll>
      ) : (
        <Link
          href='/'
          className='cursor-pointer focus:outline-1'
          aria-label={logo.ariaLabel}
          onClick={onClick}
        >
          <LogoIcon
            width={width}
            height={height}
            className={clsx(
              'inline-block fill-white  transition  hover:fill-accentDarkOrange hover:text-accentDarkOrange',
              textWhite ? 'text-white' : 'text-darkGreen',
            )}
          />
        </Link>
      )}
    </>
  );
};

export default Logo;
