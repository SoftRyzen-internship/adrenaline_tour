import GoItIcon from '/public/icons/go-it.svg';
import SoftRyzenIcon from '/public/icons/softryzen.svg';

import LinkButton from '@/components/ui/LinkButton';
import Logo from '@/components/ui/Logo';
import MovingBanner from '@/components/ui/MovingBanner/MovingBanner';
import NavMenu from '@/components/ui/NavMenu';
import Phones from '@/components/ui/Phones';
import Social from '@/components/ui/Social';
import { Pages } from '@/@types';
import { footerData } from '@/data';

const Footer = () => {
  return (
    <footer className='section border-t border-white32 bg-darkBlue p-0'>
      <div className='container flex flex-col items-center gap-6 py-6 md:flex-row md:justify-between md:py-8'>
        <div className='flex flex-col gap-6 md:flex-row md:justify-between mdOnly:basis-7/12 xl:gap-8'>
          <Logo
            textWhite
            width={166}
            height={53}
            className='md:h-12 md:w-[151px] xl:h-[51px] xl:w-[153px]'
            toScroll
          />
          <Phones variant='footer' />
        </div>
        <Social variant='footer' />
        <div className='h-px w-dvw bg-white32 md:hidden' />
        <NavMenu buttonStyle='footer' className='self-stretch' />
      </div>

      <MovingBanner />

      <div className='container flex flex-col gap-4 py-8 font-inter text-light text-white md:leading-[1.5] xl:flex-row xl:justify-between xl:pt-10 xl:leading-[1.4]'>
        <LinkButton
          variant='footer'
          href={Pages.POLICY}
          className='self-center md:leading-[1.5] xl:leading-[1.4]'
        >
          {footerData.policy}
        </LinkButton>

        <p className='text-center'>{footerData.rights}</p>
        <div className=' flex flex-wrap justify-center gap-x-4 gap-y-3 md:gap-6'>
          <p className='text-center smOnly:basis-full'>{footerData.support}</p>
          <a
            href={footerData.linkGoIT}
            target='_blank'
            rel='noopener noreferrer nofollow'
            aria-label={footerData.ariaGoIT}
            className='text-white transition hover:text-accentDefaultOrange focus:text-accentDefaultOrange'
          >
            <GoItIcon
              width={64}
              height={19}
              className='fill-current transition'
            />
          </a>
          <a
            href={footerData.linkSoftRyzen}
            target='_blank'
            rel='noopener noreferrer nofollow'
            aria-label={footerData.ariaSoftRyzen}
            className='brightness-0 invert transition-filter duration-500 ease-out hover:brightness-100 hover:invert-0 focus:brightness-100 focus:invert-0 md:-ml-2'
          >
            <SoftRyzenIcon width={131} height={19} className='transition' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
