import React from 'react';

import clsx from 'clsx';

import { IButtonProps } from './Button.types';

const Button: React.FC<IButtonProps> = ({
  children,
  variant,
  icon,
  iconPosition,
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center leading-[1.5]',
        variant === 'main' &&
          'gap-4 bg-accentDefaultOrange px-8 py-4 font-unbounded text-sm font-medium text-white transition hover:bg-accentDarkOrange md:py-[17.5px] md:text-base',
        variant === 'secondary' &&
          'relative gap-2 bg-transparent fill-darkBlue  font-inter text-xs  font-bold text-darkBlue transition-colors after:absolute after:bottom-[0px] after:block after:h-[0.8px] after:w-full after:bg-accentDefaultOrange after:opacity-0 after:transition-opacity hover:fill-accentDarkOrange hover:text-accentDarkOrange hover:after:opacity-100  focus:fill-accentDarkOrange focus:text-accentDarkOrange  focus:after:opacity-100',
        variant === 'readMore-main' &&
          'rounded-full bg-darkGreen px-3 py-[6px] font-inter text-sm leading-[1.4] text-white transition hover:bg-accentGreen hover:text-darkGreen focus:bg-accentGreen focus:text-darkGreen',
        variant === 'readMore-secondary' &&
          'after:transition-color relative bg-transparent font-inter text-sm font-bold leading-[1.3] text-accentDefaultOrange transition after:absolute after:bottom-[1px] after:block after:h-[0.5px] after:w-full  after:bg-accentDefaultOrange hover:text-accentDarkOrange hover:after:text-accentDarkOrange focus:text-accentDarkOrange focus:after:text-accentDarkOrange  md:text-base md:leading-[1.4] xl:leading-[1.5]',
        className,
      )}
      {...rest}
    >
      {icon && iconPosition === 'before' && icon}
      {children}
      {icon && iconPosition === 'after' && icon}
    </button>
  );
};

export default Button;
