import * as yup from 'yup';

import { IFormState } from '@/@types';
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
    textareaMax,
  },
} = form;

const formSchema: yup.ObjectSchema<IFormState> = yup.object({
  name: yup
    .string()
    .trim()
    .required(required)
    .min(2, nameMin)
    .max(30, nameMax)
    .matches(/^[А-ЯҐЄІЇа-яґєіїA-Za-z\s'-]+$/u, namePattern),
  phone: yup
    .string()
    .trim()
    .required(required)
    .min(9, phoneMin)
    .max(30, phoneMax)
    .matches(/^[0-9+\-\(\)\s]*$/, phonePattern),
  email: yup
    .string()
    .required(required)
    .max(63, emailMax)
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, emailPattern),
  message: yup.string().trim().nullable().max(500, textareaMax),
  privacyPolicy: yup.boolean().oneOf([true]).required(),
});

export default formSchema;
