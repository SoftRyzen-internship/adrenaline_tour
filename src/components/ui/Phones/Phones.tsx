import Phone from '/public/icons/phone.svg';
import Email from '/public/icons/email.svg';

import { fetchContacts } from '@/actions/requests';
import { formatPhoneNumber } from '@/utils';

import { IPhonesProps } from './Phones.types';

const Phones: React.FC<IPhonesProps> = async ({
  variant = 'contacts',
  className = '',
}) => {
  const data = await fetchContacts();
  if (!data) {
    return null;
  }

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
            href={`mailto:${data.email}`}
            className='transition hover:text-accentDarkOrange focus:text-accentDarkOrange'
          >
            {data.email}
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
          {Object.entries(data.numbers).map(([country, number]) => (
            <div
              key={country}
              className='flex cursor-pointer font-inter text-[16px] leading-[1.30] text-white md:text-lightLarge md:font-medium xl:text-extraLarge'
            >
              <a
                href={`tel:${number}`}
                className='transition hover:text-accentDarkOrange focus:text-accentDarkOrange'
              >
                {formatPhoneNumber(number)}
              </a>
              <span className='text-white32'>&nbsp;|&nbsp;</span>
              <p className='uppercase transition hover:text-accentDarkOrange focus:text-accentDarkOrange'>
                {country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <div className={`flex flex-col items-center gap-[6px] ${className}`}>
      {Object.entries(data.numbers).map(([country, number]) => (
        <div
          key={country}
          className='flex cursor-pointer font-inter text-light text-white md:leading-[1.50] xl:text-[16px]'
        >
          <a
            href={`tel:${number}`}
            className='transition hover:text-accentDarkOrange focus:text-accentDarkOrange'
          >
            {formatPhoneNumber(number)}
          </a>
          <span className='text-white32'>&nbsp;|&nbsp;</span>
          <p className='uppercase transition hover:text-accentDarkOrange focus:text-accentDarkOrange'>
            {country}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Phones;
