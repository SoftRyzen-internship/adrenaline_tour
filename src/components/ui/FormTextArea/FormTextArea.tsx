import { FormTextAreaProps } from './FormTextArea.types';

const FormTextArea = ({
  name,
  label,
  required,
  ...rest
}: FormTextAreaProps) => {
  return (
    <label className='flex cursor-pointer flex-col gap-4 border-b border-white32 text-medium font-medium text-white hover:border-white48 focus:border-white48 md:text-lightLarge'>
      <span>
        {label}{' '}
        {required && <span className='text-accentDefaultOrange'>*</span>}
      </span>
      <textarea
        className='h-[95px] resize-none bg-transparent pb-3 pr-[10px] pt-[10px] md:h-[98px]'
        name={name}
        {...rest}
      ></textarea>
    </label>
  );
};

export default FormTextArea;
