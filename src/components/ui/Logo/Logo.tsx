'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';

import LogoIcon from '/public/icons/logo.svg';

import { Pages } from '@/@types';
import { logo } from '@/data';

import { ILogoProps } from './Logo.types';

const Logo: React.FC<ILogoProps> = ({
  textWhite,
  width,
  height,
  toScroll,
  onClick,
}) => {
  const styleLogo = clsx(
    'fill-white  transition  hover:fill-accentDarkOrange hover:text-accentDarkOrange',
    textWhite ? 'text-white' : 'text-darkGreen',
  );

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
            <LogoIcon width={width} height={height} className={styleLogo} />
          </div>
        </LinkScroll>
      ) : (
        <Link
          href={Pages.MAIN}
          className='cursor-pointer focus:outline-1'
          aria-label={logo.ariaLabel}
          onClick={onClick}
        >
          <div className='inline-block'>
            <LogoIcon width={width} height={height} className={styleLogo} />
          </div>
        </Link>
      )}
    </>
  );
};

export default Logo;
