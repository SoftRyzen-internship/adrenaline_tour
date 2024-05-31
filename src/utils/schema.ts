import * as yup from 'yup';

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
    emailPattern,
  },
} = form;

export const schema = yup.object({
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
    .matches(/^$|^\s*[^\s@]+@[^\s@]+\.[^\s@]+\s*$/, emailPattern),
  message: yup.string(),
  privacyPolicy: yup.boolean().oneOf([true]).required(),
});
