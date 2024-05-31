// "use client"

import GoItIcon from '@/../public/icons/go-it.svg';
import SoftRyzenIcon from '@/../public/icons/softryzen.svg';
import IconButton from '@/components/ui/IconButton';
import LinkButton from '@/components/ui/LinkButton';
import Logo from '@/components/ui/Logo';
import MovingBanner from '@/components/ui/MovingBanner/MovingBanner';
import NavMenu from '@/components/ui/NavMenu';
import Phones from '@/components/ui/Phones';
import Social from '@/components/ui/Social';

// import s from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className='section bg-darkBlue'>
      <div className='container flex'>
        <Logo textWhite width={153} height={51} />
        <Phones variant='footer' />
        <Social variant='footer' />
        <NavMenu buttonStyle='footer' />
      </div>

      <MovingBanner />

      <div className='container flex'>
        <LinkButton href='/' variant='footer'>
          Політика конфіденціальності
        </LinkButton>
        <p>© Всі права захищені © 2024 Adrenaline Tour</p>
        <p>Створено при підтримці</p>
        <IconButton ariaLabel='Відкрити Модалку'>
          <GoItIcon
            width={64}
            height={19}
            className='h-8 w-8 fill-white transition hover:fill-accentDefaultOrange'
          />
        </IconButton>
        <IconButton ariaLabel='Відкрити Модалку'>
          <SoftRyzenIcon
            width={131}
            height={19}
            className='h-8 w-8 fill-white transition hover:fill-accentDefaultOrange'
          />
        </IconButton>
      </div>
    </footer>
  );
};

export default Footer;
