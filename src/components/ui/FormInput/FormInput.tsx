import { FormInputProps } from './FormInput.types';

const FormInput = ({ name, label, required, ...rest }: FormInputProps) => {
  return (
    <label className='flex cursor-pointer flex-col gap-4 border-b border-white32 text-medium font-medium text-white hover:border-white48 focus:border-white48 md:text-lightLarge'>
      <p>
        {label}{' '}
        {required && <span className='text-accentDefaultOrange'>*</span>}
      </p>
      <input
        className='bg-transparent pb-3 pt-[10px]'
        autoComplete='off'
        {...rest}
        name={name}
      />
    </label>
  );
};

export default FormInput;
