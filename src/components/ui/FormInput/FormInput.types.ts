import { ComponentPropsWithoutRef } from 'react';

export interface FormInputProps extends ComponentPropsWithoutRef<'input'> {
  name: string;
  label: string;
  errorMessage?: string;
}
