import * as yup from 'yup';

import { IformDataType } from '@/@types/Form.types';
import form from '@/data/form.json';

const {
  validationMessages: {
    required,
    nameMin,
    nameMax,
    namePattern,
    phoneMin,
    phoneMax,
    phonePattern,
    emailMax,
    emailPattern,
  },
} = form;

export const schemaForm: yup.ObjectSchema<IformDataType> = yup.object({
  name: yup
    .string()
    .required(required)
    .min(2, nameMin)
    .max(30, nameMax)
    .matches(/^[А-ЯҐЄІЇа-яґєіїA-Za-z\s'-]+$/u, namePattern),
  phone: yup
    .string()
    .required(required)
    .min(3, phoneMin)
    .max(16, phoneMax)
    .matches(/^\s*\+?\d+\s*$/, phonePattern),
  email: yup
    .string()
    .required(required)
    .max(63, emailMax)
    .matches(/^$|^\s*[^\s@]+@[^\s@]+\.[^\s@]+\s*$/, emailPattern),
  message: yup.string().nullable(),
  privacyPolicy: yup.boolean().oneOf([true]).required(),
});
