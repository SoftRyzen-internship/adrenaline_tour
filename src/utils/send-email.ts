import axios from 'axios';

import { IFormState } from '@/@types';

export const sendEmail = async (formData: IFormState): Promise<void> => {
  console.log(formData);

  await axios.post('/api/contact', formData);
};
