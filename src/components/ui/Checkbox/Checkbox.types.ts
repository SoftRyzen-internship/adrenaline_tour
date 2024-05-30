import { InputHTMLAttributes } from 'react';

export interface CheckboxProps extends InputHTMLAttributes<'input'> {
  name: string;
  label: string;
}
