import React from 'react';

import clsx from 'clsx';

import { IIconButtonProps } from './IconButton.types';

const IconButton: React.FC<IIconButtonProps> = ({
  children,
  ariaLabel,
  className = '',
  ...rest
}) => {
  return (
    <button
      className={clsx(className, 'flex items-center justify-center')}
      aria-label={ariaLabel}
      {...rest}
    >
      {children}
    </button>
  );
};

export default IconButton;
