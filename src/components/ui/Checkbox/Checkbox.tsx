import { CheckboxProps } from './Checkbox.types';

const Checkbox = ({ name, label }: CheckboxProps) => {
  return (
    <label className='flex gap-3 text-light font-light text-white md:text-medium'>
      <input type='checkbox' name={name} />
      {label}
    </label>
  );
};

export default Checkbox;
