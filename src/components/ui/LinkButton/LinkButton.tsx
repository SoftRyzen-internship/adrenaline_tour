'use client';

import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';

import { ILinkButtonProps } from './LinkButton.types';

const linkButtonStyle = {
  main: 'focus:bg-accentDarkOrange md:py-[17.5px] gap-4 bg-accentDefaultOrange px-8 py-4 font-unbounded text-sm text-white transition-colors hover:bg-accentDarkOrange  md:text-base font-medium leading-[1.5]',
  secondary:
    'relative gap-2 bg-transparent  fill-accentDarkOrange font-unbounded text-sm text-accentDefaultOrange transition-colors after:absolute after:bottom-[-3px] after:block after:h-[1.5px] after:w-full after:bg-accentDefaultOrange after:opacity-0 after:transition-opacity hover:fill-accentDarkOrange hover:text-accentDarkOrange hover:after:opacity-100  focus:fill-accentDarkOrange focus:text-accentDarkOrange  focus:after:opacity-100 xl:text-base font-medium leading-[1.5]',
  navLink:
    'inline-block font-unbounded text-[24px] font-bold leading-none text-blueDefault transition-colors hover:text-accentLightOrange focus:text-accentLightOrange active:text-accentDefaultOrange md:text-[40px] font-medium leading-[1.5]',
  footer:
    'font-inter text-sm font-normal leading-[1.3] text-white transition hover:text-accentDarkOrange focus:text-accentDarkOrange',
  disclosure:
    'cursor-pointer border-b-[1px] bg-transparent px-[45px] pt-6 pb-4 font-inter text-xl/[1.3] font-bold text-grey02',
};

const LinkButton: React.FC<ILinkButtonProps> = ({
  children,
  icon,
  href,
  variant,
  iconPosition,
  toScroll,
  toScrollId,
  currentDisclosure,
  className,
  ...rest
}) => {
  return (
    <>
      {toScroll ? (
        <LinkScroll
          {...rest}
          href='#'
          to={toScrollId}
          smooth={true}
          spy={true}
          duration={500}
          offset={0}
          className={clsx(
            'inline-flex items-center justify-center',
            variant === 'main' && linkButtonStyle.main,
            variant === 'secondary' && linkButtonStyle.secondary,
            variant === 'navLink' && linkButtonStyle.navLink,
            variant === 'footer' && linkButtonStyle.footer,
            variant === 'disclosure' && linkButtonStyle.disclosure,
            currentDisclosure &&
              'border-b-accentDarkOrange text-accentDarkOrange',

            className,
          )}
        >
          {icon && iconPosition === 'before' && icon}
          {children}
          {icon && iconPosition === 'after' && icon}
        </LinkScroll>
      ) : (
        <Link
          href={`/${href}`}
          className={clsx(
            'inline-flex items-center justify-center',
            variant === 'main' && linkButtonStyle.main,
            variant === 'secondary' && linkButtonStyle.secondary,
            variant === 'navLink' && linkButtonStyle.navLink,
            variant === 'footer' && linkButtonStyle.footer,
            className,
          )}
          {...rest}
        >
          {icon && iconPosition === 'before' && icon}
          {children}
          {icon && iconPosition === 'after' && icon}
        </Link>
      )}
    </>
  );
};

export default LinkButton;
