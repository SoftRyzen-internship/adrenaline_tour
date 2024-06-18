'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';

import LogoIcon from '/public/icons/logo.svg';
import LogoIconFooter from '/public/icons/logo_footer.svg';

import { IdForScroll, Pages } from '@/@types';
import { logo } from '@/data';

import { ILogoProps } from './Logo.types';

const Logo: React.FC<ILogoProps> = ({
  textWhite,
  width,
  height,
  toScroll,
  onClick,
  className,
}) => {
  const logoStyles = clsx(
    'inline-block fill-white  transition hover:fill-accentDarkOrange hover:text-accentDarkOrange focus:fill-accentDarkOrange focus:text-accentDarkOrange',
    textWhite ? 'text-white' : 'text-darkGreen',
    className,
  );

  return (
    <>
      {toScroll ? (
        <LinkScroll
          href='#'
          to={IdForScroll.HEADER}
          smooth={true}
          spy={true}
          duration={500}
          offset={0}
          className='group placeholder:backdrop:cursor-pointer'
          aria-label={logo.ariaLabel}
        >
          <LogoIconFooter
            width={width}
            height={height}
            className={logoStyles}
          />
        </LinkScroll>
      ) : (
        <Link
          href={Pages.MAIN}
          className='group cursor-pointer'
          aria-label={logo.ariaLabel}
          onClick={onClick}
        >
          <LogoIcon width={width} height={height} className={logoStyles} />
        </Link>
      )}
    </>
  );
};

export default Logo;
