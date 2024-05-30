import clsx from 'clsx';

import s from './Checkbox.module.css';
import { CheckboxProps } from './Checkbox.types';

const Checkbox = ({ name, label }: CheckboxProps) => {
  return (
    <label className='flex cursor-pointer gap-3  text-light font-light text-white md:text-medium'>
      <input
        className={clsx('', s['custom-checkbox'])}
        type='checkbox'
        name={name}
        tabIndex={0}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
