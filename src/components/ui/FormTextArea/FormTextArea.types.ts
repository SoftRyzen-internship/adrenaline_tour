import { ComponentPropsWithoutRef } from 'react';

export interface IFormTextAreaProps
  extends ComponentPropsWithoutRef<'textarea'> {
  name: string;
  label: string;
}
