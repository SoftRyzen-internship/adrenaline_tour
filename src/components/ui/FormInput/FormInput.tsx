import { forwardRef } from 'react';

import AnimationContainer from '@/components/common/AnimationContainer';

import { IFormInputProps } from './FormInput.types';

const FormInput = forwardRef<HTMLInputElement, IFormInputProps>(
  ({ label, errorMessage, ...rest }, ref) => {
    return (
      <AnimationContainer className='xl:[--x-hidden:80px]'>
        {' '}
        <label className='relative flex cursor-pointer flex-col gap-4 border-b border-white32 text-medium font-medium text-white hover:border-white48 focus:border-white48 md:text-lightLarge'>
          <span>
            {label} <span className='text-accentDefaultOrange'>*</span>
          </span>
          <input
            className='bg-transparent pb-3 pt-[10px]'
            autoComplete='off'
            {...rest}
            ref={ref}
          />
          {errorMessage && (
            <span className='absolute bottom-[-26px] left-0 text-accentDefaultOrange'>
              {errorMessage}
            </span>
          )}
        </label>
      </AnimationContainer>
    );
  },
);

FormInput.displayName = 'FormInput';

export default FormInput;
