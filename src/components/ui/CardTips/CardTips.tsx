import { ICardTipsProps } from './CardTips.types';

const CardTips: React.FC<ICardTipsProps> = ({ title, text }) => {
  return (
    <li className='rotate-1 bg-accentDefaultOrange px-8 py-6 first:-rotate-1 first:bg-blueDefault last:-rotate-1 last:bg-darkGreen md:py-[42px] xl:w-[384px] xl:px-[42px] xl:py-[49px]'>
      <h3 className='mb-4 font-unbounded text-[16px] font-bold leading-none text-white md:max-w-[235px] md:text-lightLarge'>
        {title}
      </h3>
      <p className='font-inter text-light text-white md:text-[16px] md:leading-[24px]'>
        {text}
      </p>
    </li>
  );
};

export default CardTips;
