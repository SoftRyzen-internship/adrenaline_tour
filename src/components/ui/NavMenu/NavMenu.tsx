import clsx from 'clsx';

import { Pages } from '@/@types';
import LinkButton from '@/components/ui/LinkButton';
import { navList } from '@/data';

import { INavMenuProps } from './NavMenu.types';

const NavMenu: React.FC<INavMenuProps> = ({
  buttonStyle,
  onCloseMenu,
  className,
}) => {
  return (
    <nav className={className}>
      <ul
        className={clsx(
          'flex flex-col text-center xl:text-left',
          buttonStyle === 'navLink' && 'gap-4 md:gap-10',
          buttonStyle === 'footer' &&
            'gap-[6px] mdOnly:text-left xl:h-full xl:flex-row xl:items-center xl:gap-8',
        )}
      >
        {navList.map(({ id, page, title }) =>
          Pages.hasOwnProperty(page) ? (
            <li key={id}>
              <LinkButton
                variant={buttonStyle}
                href={Pages[page as keyof typeof Pages]}
                onClick={onCloseMenu}
                className={clsx(
                  buttonStyle === 'navLink' && 'px-1 py-[10px]',
                  buttonStyle === 'footer' &&
                    'py-1 md:leading-[1.5] xl:leading-[1.4]',
                )}
              >
                {title}
              </LinkButton>
            </li>
          ) : null,
        )}
      </ul>
    </nav>
  );
};

export default NavMenu;
