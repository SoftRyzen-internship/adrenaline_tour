import { IdForScroll, Pages } from '@/@types';
import IconButton from '@/components/ui/IconButton';
import LinkButton from '@/components/ui/LinkButton';
import { ILinkButtonProps } from '@/components/ui/LinkButton/LinkButton.types';
import Logo from '@/components/ui/Logo';
import NavMenu from '@/components/ui/NavMenu';
import PageConditionalRender from '@/components/ui/PageConditionalRender';
import Social from '@/components/ui/Social';
import { ariaLabel, burgerMenuData } from '@/data';
import { useScreenSize } from '@/hooks';

import CloseIcon from '/public/icons/close_24.svg';

import { IBurgerMenuProps } from './BurgerMenu.types';

const BurgerMenu: React.FC<IBurgerMenuProps> = ({ onCloseMenu }) => {
  const isDesktop = useScreenSize('(min-width: 1280px)');
  return (
    <div className='scroll-bar-custom container flex h-dvh flex-col justify-between pb-11 pt-6 md:pb-[100px] xl:pl-20 xl:pr-28'>
      <div className='flex items-center justify-between xl:justify-end xl:pt-6'>
        {isDesktop ? null : (
          <Logo
            width={126}
            height={40}
            className='h-16 w-[201px]'
            onClick={onCloseMenu}
          />
        )}

        <IconButton
          type='button'
          ariaLabel={ariaLabel.burgerClose}
          onClick={onCloseMenu}
          className='stroke-grey01 transition hover:stroke-accentDarkOrange focus:stroke-accentDarkOrange'
        >
          <CloseIcon className='my-auto h-6 w-6 md:h-10 md:w-10 xl:h-12 xl:w-12' />
        </IconButton>
      </div>
      <NavMenu buttonStyle='navLink' onCloseMenu={onCloseMenu} />
      <div className='mt-8 smOnly:space-y-8 md:mt-10 md:flex md:items-center md:justify-center md:space-x-12 xl:justify-start notXL:text-center'>
        <PageConditionalRender<ILinkButtonProps>
          pages={[Pages.POLICY]}
          trueProps={{
            variant: 'main',
            href: `${Pages.MAIN}#${IdForScroll.CONTACTS}`,
            onClick: onCloseMenu,
          }}
          alternativeProps={{
            variant: 'main',
            toScroll: true,
            to: IdForScroll.CONTACTS,
            onClick: onCloseMenu,
          }}
          component={LinkButton}
          trueContent={burgerMenuData.textButton}
          alternativeContent={burgerMenuData.textButton}
          className='smOnly:w-full md:h-[59px] md:w-[246px]'
        />
        <Social variant='header' className='inline-flex' />
      </div>
    </div>
  );
};

export default BurgerMenu;
