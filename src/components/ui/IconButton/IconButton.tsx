import React from 'react';

import clsx from 'clsx';

import { IIconButtonProps } from './IconButton.types';

const IconButton: React.FC<IIconButtonProps> = ({
  children,
  ariaLabel,
  className,
  ...rest
}) => {
  return (
    <button
      className={clsx('flex items-center justify-center', className)}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
