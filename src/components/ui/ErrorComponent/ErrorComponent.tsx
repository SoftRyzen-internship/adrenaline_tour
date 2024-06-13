import clsx from 'clsx';

import { errorData } from '@/data';

import s from './ErrorComponent.module.css';
import { IErrorComponentProps } from './IErrorComponentProps.types';

const ErrorComponent: React.FC<IErrorComponentProps> = ({ isLoadingError }) => {
  return (
    <div className='section container mt-[90px] md:mt-[112px] xl:mt-[144px]'>
      <div
        className={clsx(
          'flex flex-col items-center bg-blueDefault px-4 pb-8 pt-12 md:mx-auto md:max-w-[456px] md:px-3 md:pb-12 md:pt-20 xl:max-w-[592px] xl:px-20 xl:pb-[60px]',
          s.bgTorn,
        )}
      >
        <h2 className='mb-3 text-large font-bold text-white xl:text-[28px]/[31px]'>
          {errorData.title}
        </h2>
        <p className='text-center text-light leading-normal text-white md:px-8 xl:px-0 xl:text-lightLarge'>
          {isLoadingError ? errorData.text : errorData.alternativeText}
        </p>
      </div>
    </div>
  );
};

export default ErrorComponent;
