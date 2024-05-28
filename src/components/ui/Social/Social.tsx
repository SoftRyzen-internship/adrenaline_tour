import clsx from 'clsx';

import Facebook from '/public/icons/facebook.svg';
import Instagram from '/public/icons/instagram.svg';

import data from '@/data/social.json';

import { ISocialProps } from './Social.types';

const Social: React.FC<ISocialProps> = ({
  variant = 'header',
  className = '',
}) => {
  return (
    <ul
      className={clsx(
        'flex',
        variant === 'header' && 'gap-4 md:gap-6',
        variant === 'footer' && 'gap-2',
        className,
      )}
    >
      {data.map(item => (
        <li key={item.id}>
          <a
            href={item.href}
            target='_blank'
            rel='noopener noreferrer nofollow'
            aria-label={item.ariaLabel}
            className={clsx(
              'flex cursor-pointer items-center justify-center transition',
              variant === 'header' &&
                'h-[50px] w-[50px] rounded-[1000px] border-2 border-solid border-accentDefaultOrange fill-accentDefaultOrange hover:bg-accentDefaultOrange hover:fill-white focus:bg-accentDefaultOrange focus:fill-white active:bg-accentDarkOrange active:fill-white',
              variant === 'footer' &&
                'fill-white p-2.5 hover:fill-accentDarkOrange focus:fill-accentDarkOrange xl:p-[13px]',
            )}
          >
            {item.name === 'instagram' && (
              <Instagram
                className={clsx(
                  variant === 'header' && 'h-6 w-6',
                  variant === 'footer' && 'h-5 w-5 xl:h-6 xl:w-6',
                )}
              />
            )}
            {item.name === 'facebook' && (
              <Facebook
                className={clsx(
                  variant === 'header' && 'h-6 w-6',
                  variant === 'footer' && 'h-5 w-5 xl:h-6 xl:w-6',
                )}
              />
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
