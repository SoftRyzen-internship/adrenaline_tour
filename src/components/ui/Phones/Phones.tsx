import Phone from '/public/icons/phone.svg';
import Email from '/public/icons/email.svg';

import { phones } from '@/data';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';

import { IPhonesProps } from './Phones.types';

const Phones: React.FC<IPhonesProps> = ({
  variant = 'contacts',
  className = '',
}) => {
  return variant === 'contacts' ? (
    <div className={`flex flex-col gap-4 md:gap-8 xl:gap-10 ${className}`}>
      <div className='flex items-center gap-4 xl:gap-6'>
        <Email
          className='h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12'
          width={32}
          height={32}
        />
        <div className='cursor-pointer font-inter text-[16px] leading-[1.30] text-white md:text-lightLarge md:font-medium xl:text-extraLarge'>
          <a
            href={`mailto:${phones.email}`}
            className='transition hover:text-accentDarkOrange focus:text-accentDarkOrange'
          >
            {phones.email}
          </a>
        </div>
      </div>
      <div className='flex gap-4 xl:gap-6'>
        <Phone
          className='h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12'
          width={32}
          height={32}
        />
        <div className='flex flex-col gap-2 md:gap-3 xl:gap-4'>
          {phones.tel.map(contact => (
            <div
              key={contact.id}
              className='flex cursor-pointer font-inter text-[16px] leading-[1.30] text-white md:text-lightLarge md:font-medium xl:text-extraLarge'
            >
              <a
                href={`tel:${contact.number}`}
                className='transition hover:text-accentDarkOrange focus:text-accentDarkOrange'
              >
                {formatPhoneNumber(contact.number)}
              </a>
              <span className='text-white32'>&nbsp;|&nbsp;</span>
              <p>{contact.country}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className={`flex flex-col gap-[6px] ${className}`}>
      {phones.tel.map(contact => (
        <div
          key={contact.id}
          className='flex cursor-pointer font-inter text-light text-white md:leading-[1.50] xl:text-[16px]'
        >
          <a
            href={`tel:${contact.number}`}
            className='transition hover:text-accentDarkOrange focus:text-accentDarkOrange'
          >
            {formatPhoneNumber(contact.number)}
          </a>
          <span className='text-white32'>&nbsp;|&nbsp;</span>
          <p>{contact.country}</p>
        </div>
      ))}
    </div>
  );
};

export default Phones;
