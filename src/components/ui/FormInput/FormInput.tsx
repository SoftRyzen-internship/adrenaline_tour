import { FormInputProps } from './FormInput.types';

const FormInput = ({ placeholder, name, label }: FormInputProps) => {
  return (
    <label className='flex flex-col gap-4 border-b border-white32  text-medium text-white'>
      {label}
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
