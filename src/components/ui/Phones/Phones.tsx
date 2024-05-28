import Phone from '/public/icons/phone.svg';

import data from '@/data/phones.json';
import { formatPhoneNumber } from '@/utils/formatPhoneNumber';

import { IPhonesProps } from './Phones.types';

const Phones: React.FC<IPhonesProps> = ({
  variant = 'contacts',
  className = '',
}) => {
  return variant === 'contacts' ? (
    <div className={`flex gap-4 xl:gap-6 ${className}`}>
      <Phone
        className='h-8 w-8 md:h-10 md:w-10 xl:h-12 xl:w-12'
        width={32}
        height={32}
      />
      <div className='flex flex-col gap-2 md:gap-3 xl:gap-4'>
        {data.map(contact => (
          <div
            key={contact.id}
            className='flex cursor-pointer font-inter text-[16px] leading-[1.30] text-white transition hover:text-accentDarkOrange focus:text-accentDarkOrange md:text-lightLarge md:font-medium xl:text-extraLarge'
          >
            <a href={`tel:${contact.number}`}>
              {formatPhoneNumber(contact.number)}
            </a>
            <span className='text-white32'>&nbsp;|&nbsp;</span>
            <p>{contact.country}</p>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className={`flex flex-col gap-[6px] ${className}`}>
      {data.map(contact => (
        <div
          key={contact.id}
          className='flex cursor-pointer font-inter text-light text-white transition hover:text-accentDarkOrange focus:text-accentDarkOrange md:leading-[1.50] xl:text-[16px]'
        >
          <a href={`tel:${contact.number}`}>
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
