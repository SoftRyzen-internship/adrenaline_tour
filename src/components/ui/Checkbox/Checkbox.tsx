import clsx from 'clsx';

import s from './Checkbox.module.css';
import { CheckboxProps } from './Checkbox.types';

const Checkbox = ({ name, label }: CheckboxProps) => {
  return (
    <label className='flex gap-3 text-light font-light text-white md:text-medium'>
      <input
        className={clsx('', s['custom-checkbox'])}
        type='checkbox'
        name={name}
      />
      <p>{label}</p>
    </label>
  );
};

export default Checkbox;
