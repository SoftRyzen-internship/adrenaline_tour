import LinkButton from '@/components/ui/LinkButton';
import Logo from '@/components/ui/Logo';
import NavMenu from '@/components/ui/NavMenu';
import Social from '@/components/ui/Social';

import { IBurgerMenuProps } from './BurgerMenu.types';

const BurgerMenu: React.FC<IBurgerMenuProps> = ({ onCloseMenu }) => {
  return (
    <div className='container flex min-h-full flex-col justify-between pb-11 pt-6 md:pb-[100px] xl:pl-20'>
      <Logo width={126} height={40} className='h-16 w-[201px] xl:hidden' />
      <NavMenu buttonStyle='navLink' onCloseMenu={onCloseMenu} />
      <div className='smOnly:space-y-8 md:space-x-12 notXL:text-center'>
        <LinkButton href='#sectionId' variant='main' className='smOnly:w-full'>
          {` Зв'яжіться з нами`}
        </LinkButton>
        <Social variant='header' className='inline-flex' />
      </div>
    </div>
  );
};

export default BurgerMenu;
