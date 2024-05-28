import React from 'react';

import clsx from 'clsx';
import Link from 'next/link';

interface ILinkButtonProps {
  children: React.ReactNode;
  href: string;
  variant?: 'main-icon';
  className?: string;
}

const LinkButton: React.FC<ILinkButtonProps> = ({
  children,
  href,
  variant,
  className = '',
  ...rest
}) => {
  return (
    <Link
      href={`/${href}`}
      className={clsx(
        'inline-flex items-center justify-center gap-4 bg-accentDefaultOrange px-8 py-4 font-unbounded text-sm font-medium leading-[1.5] text-white md:py-[17.5px] md:text-base',
        variant === 'main-icon' && 'py-[13.5px]',
        className,
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
