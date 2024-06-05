import axios from 'axios';

import { IFormState } from '@/@types';

const sendingEmail = async (formData: IFormState): Promise<void> => {
  await axios.post('/api/contact', formData);
};

export default sendingEmail;
