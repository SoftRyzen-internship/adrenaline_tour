import { forwardRef } from 'react';

import { IFormTextAreaProps } from './FormTextArea.types';

const FormTextArea = forwardRef<HTMLTextAreaElement, IFormTextAreaProps>(
  ({ name, label, errorMessage, ...rest }, ref) => {
    return (
      <label className='relative flex cursor-pointer flex-col gap-4 border-b border-white32 text-medium font-medium text-white hover:border-white48 focus:border-white48 md:text-lightLarge'>
        <span>{label}</span>
        <textarea
          className='h-[95px] resize-none bg-transparent pb-3 pr-[10px] pt-[10px] placeholder:text-placeholderBlue md:h-[98px]'
          name={name}
          ref={ref}
          {...rest}
        />
        {errorMessage && (
          <span className='absolute bottom-[-26px] left-0 font-inter text-xs font-medium text-red'>
            {errorMessage}
          </span>
        )}
      </label>
    );
  },
);

FormTextArea.displayName = 'FormTextArea';

export default FormTextArea;
