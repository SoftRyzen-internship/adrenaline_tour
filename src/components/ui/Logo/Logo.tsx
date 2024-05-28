'use client';

import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';

import { logo } from '@/data';

import { ILogoProps } from './Logo.types';
import LogoSvg from './LogoSvg';

const Logo: React.FC<ILogoProps> = ({
  textColor,
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
            <LogoSvg textColor={textColor} width={width} height={height} />
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
            <LogoSvg textColor={textColor} width={width} height={height} />
          </div>
        </Link>
      )}
    </>
  );
};

export default Logo;
