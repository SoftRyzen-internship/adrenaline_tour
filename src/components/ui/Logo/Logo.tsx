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
          <div className='inline-block'>
            <LogoIcon
              width={width}
              height={height}
              className={clsx(
                'fill-white  transition  hover:fill-accentDarkOrange hover:text-accentDarkOrange',
                textWhite ? 'text-white' : 'text-darkGreen',
              )}
            />
          </div>
        </LinkScroll>
      ) : (
        <Link
          href='/'
          className='cursor-pointer focus:outline-1'
          aria-label={logo.ariaLabel}
          onClick={onClick}
        >
          <div className='inline-block'>
            <LogoIcon
              width={width}
              height={height}
              className={clsx(
                'fill-white  transition  hover:fill-accentDarkOrange hover:text-accentDarkOrange',
                textWhite ? 'text-white' : 'text-darkGreen',
              )}
            />
          </div>
        </Link>
      )}
    </>
  );
};

export default Logo;
