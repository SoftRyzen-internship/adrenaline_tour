import GoItIcon from '/public/icons/go-it.svg';
import SoftRyzenIcon from '/public/icons/softryzen.svg';

import LinkButton from '@/components/ui/LinkButton';
import Logo from '@/components/ui/Logo';
import MovingBanner from '@/components/ui/MovingBanner/MovingBanner';
import NavMenu from '@/components/ui/NavMenu';
import Phones from '@/components/ui/Phones';
import Social from '@/components/ui/Social';
import PageConditionalRender from '@/components/ui/PageConditionalRender';
import { Pages } from '@/@types';
import { footerData } from '@/data';

const Footer = () => {
  return (
    <footer className='section border-t border-white32 bg-darkBlue p-0'>
      <div className='container flex flex-col items-center gap-6 py-6'>
        <Logo textWhite width={166} height={53} />
        <Phones variant='footer' />
        <Social variant='footer' />
        <div className='h-px w-dvw bg-white32' />
        <NavMenu buttonStyle='footer' className='self-stretch' />
      </div>

      <MovingBanner />

      <div className='container flex flex-col gap-4 py-8 font-inter text-light text-white'>
        <PageConditionalRender
          pages={['/policy']}
          trueProps={{ href: Pages.MAIN, variant: 'footer' }}
          alternativeProps={{ href: Pages.POLICY, variant: 'footer' }}
          component={LinkButton}
          trueContent={footerData.main}
          alternativeContent={footerData.policy}
        />

        <p>{footerData.rights}</p>
        <div className=' flex flex-wrap justify-center gap-x-4 gap-y-3'>
          <p className='basis-full text-center'>{footerData.support}</p>
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
            className='brightness-0 invert transition hover:brightness-100 hover:invert-0 focus:brightness-100 focus:invert-0'
          >
            <SoftRyzenIcon width={131} height={19} className='transition' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
