import { ComponentPropsWithoutRef } from 'react';

export interface IFormInputProps extends ComponentPropsWithoutRef<'input'> {
  name: string;
  label: string;
  errorMessage?: string;
}
