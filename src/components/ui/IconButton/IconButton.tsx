import React from 'react';

import clsx from 'clsx';

import { IIconButtonProps } from './IconButton.types';

const IconButton: React.FC<IIconButtonProps> = ({
  children,
  ariaLabel,
  className,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={clsx(
        'flex items-center justify-center',
        disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
      aria-label={ariaLabel}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
