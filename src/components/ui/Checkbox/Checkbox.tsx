import clsx from 'clsx';

import s from './Checkbox.module.css';
import { ICheckboxProps } from './Checkbox.types';

const Checkbox = ({
  label,
  checked,
  onChange,
  errorMessage,
}: ICheckboxProps) => {
  return (
    <label className='flex cursor-pointer gap-3  text-light font-light text-white md:text-medium'>
      <input
        className={clsx(
          errorMessage && s['custom-checkbox-error'],
          s['custom-checkbox'],
        )}
        type='checkbox'
        checked={checked}
        onChange={e => onChange(e.target.checked)}
        tabIndex={0}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
