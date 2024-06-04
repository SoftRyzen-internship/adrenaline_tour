import axios from 'axios';

import { IFormState } from '@/@types';

export const sendingEmail = async (formData: IFormState): Promise<void> => {
  await axios.post('/api/contact', formData);
};
