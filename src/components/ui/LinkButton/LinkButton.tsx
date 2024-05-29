'use client';

import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';

import { ILinkButtonProps } from './LinkButton.styles';

const LinkButton: React.FC<ILinkButtonProps> = ({
  children,
  icon,
  href,
  variant,
  iconPosition,
  className = '',
  ...rest
}) => {
  return (
    <>
      <Link
        href={`/${href}`}
        className={clsx(
          'inline-flex items-center justify-center  font-medium leading-[1.5]',
          variant === 'main' &&
            'focus:bg-accentDarkOrangemd:py-[17.5px] gap-4 bg-accentDefaultOrange px-8 py-4 font-unbounded text-sm text-white transition-colors hover:bg-accentDarkOrange  md:text-base',
          variant === 'secondary' &&
            'relative gap-2 bg-transparent  fill-accentDarkOrange font-unbounded text-sm text-accentDefaultOrange transition-colors after:absolute after:bottom-[-3px] after:block after:h-[1.5px] after:w-full after:bg-accentDefaultOrange after:opacity-0 after:transition-opacity hover:fill-accentDarkOrange hover:text-accentDarkOrange hover:after:opacity-100  focus:fill-accentDarkOrange focus:text-accentDarkOrange  focus:after:opacity-100 xl:text-base',
          variant === 'navlink' &&
            'inline-block font-unbounded text-[24px] font-bold leading-none text-blueDefault transition-colors hover:text-accentLightOrange focus:text-accentLightOrange active:text-accentDefaultOrange md:text-[40px]',
          variant === 'footer' &&
            'font-inter text-sm font-normal leading-[1.3] text-white transition hover:text-accentDarkOrange focus:text-accentDarkOrange',
          className,
        )}
        {...rest}
      >
        {icon && iconPosition === 'before' && icon}
        {children}
        {icon && iconPosition === 'after' && icon}
      </Link>
    </>
  );
};

export default LinkButton;
