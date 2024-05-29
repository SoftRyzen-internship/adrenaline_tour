import React from 'react';

import clsx from 'clsx';

import { IIconButtonProps } from './IconButton.types';

const IconButton: React.FC<IIconButtonProps> = ({
  children,
  ariaLabel,
  className = '',
}) => {
  return (
    <button
      className={clsx(className, 'flex items-center justify-center')}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default IconButton;
