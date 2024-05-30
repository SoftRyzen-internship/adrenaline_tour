import { FormTextAreaProps } from './FormTextArea.types';

const FormTextArea = ({
  placeholder,
  name,
  label,
  required,
}: FormTextAreaProps) => {
  return (
    <label className='flex flex-col gap-4 border-b border-white32 text-medium font-medium text-white md:text-lightLarge'>
      <p>
        {label}{' '}
        {required && <span className='text-accentDefaultOrange'>*</span>}
      </p>
      <textarea
        className='h-[95px] resize-none bg-transparent pb-3 pr-[10px] pt-[10px] md:h-[98px]'
        name={name}
        placeholder={placeholder}
      ></textarea>
    </label>
  );
};

export default FormTextArea;
