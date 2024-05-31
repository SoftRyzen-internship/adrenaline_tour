import { forwardRef } from 'react';

import { FormTextAreaProps } from './FormTextArea.types';

const FormTextArea = forwardRef<HTMLTextAreaElement, FormTextAreaProps>(
  ({ name, label, required, errorMessage, ...rest }, ref) => {
    return (
      <label className='flex cursor-pointer flex-col gap-4 border-b border-white32 text-medium font-medium text-white hover:border-white48 focus:border-white48 md:text-lightLarge'>
        <span>
          {label}{' '}
          {required && <span className='text-accentDefaultOrange'>*</span>}
        </span>
        <textarea
          className='h-[95px] resize-none bg-transparent pb-3 pr-[10px] pt-[10px] md:h-[98px]'
          name={name}
          ref={ref}
          {...rest}
        ></textarea>
        {errorMessage && (
          <span className='text-accentDefaultOrange'>{errorMessage}</span>
        )}
      </label>
    );
  },
);

FormTextArea.displayName = 'FormTextArea';

export default FormTextArea;
