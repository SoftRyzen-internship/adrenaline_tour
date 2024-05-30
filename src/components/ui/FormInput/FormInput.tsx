import { FormInputProps } from './FormInput.types';

const FormInput = ({ placeholder, name, label, required }: FormInputProps) => {
  return (
    <label className='flex flex-col gap-4 border-b border-white32 text-medium font-medium text-white md:text-lightLarge'>
      <p>
        {label}{' '}
        {required && <span className='text-accentDefaultOrange'>*</span>}
      </p>
      <input
        className='bg-transparent pb-3 pt-[10px]'
        autoComplete='off'
        placeholder={placeholder}
        name={name}
      />
    </label>
  );
};

export default FormInput;
