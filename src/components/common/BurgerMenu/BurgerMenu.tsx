import { IdForScroll, Pages } from '@/@types';
import LinkButton from '@/components/ui/LinkButton';
import { ILinkButtonProps } from '@/components/ui/LinkButton/LinkButton.types';
import Logo from '@/components/ui/Logo';
import NavMenu from '@/components/ui/NavMenu';
import PageConditionalRender from '@/components/ui/PageConditionalRender';
import Social from '@/components/ui/Social';
import { burgerMenuData } from '@/data';

import { IBurgerMenuProps } from './BurgerMenu.types';

const BurgerMenu: React.FC<IBurgerMenuProps> = ({ onCloseMenu }) => {
  return (
    <div className='container flex min-h-full flex-col justify-between pb-11 pt-6 md:pb-[100px] xl:pl-20'>
      <Logo
        width={126}
        height={40}
        className='h-16 w-[201px] xl:sr-only xl:invisible xl:left-0 xl:top-0 xl:h-0 xl:w-0'
        onClick={onCloseMenu}
      />
      <NavMenu buttonStyle='navLink' onCloseMenu={onCloseMenu} />
      <div className='smOnly:space-y-8 md:space-x-12 notXL:text-center'>
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
          className='smOnly:w-full'
        />
        <Social variant='header' className='inline-flex' />
      </div>
    </div>
  );
};

export default BurgerMenu;
