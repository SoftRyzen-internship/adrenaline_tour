import { ComponentPropsWithoutRef } from 'react';

export interface FormTextAreaProps
  extends ComponentPropsWithoutRef<'textarea'> {
  name: string;
  label: string;
  errorMessage?: string;
}
