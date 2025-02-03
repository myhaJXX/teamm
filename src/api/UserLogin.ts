import { constAPILogin } from '@/constants/constAPI';
import { TLoginBasic } from '@/models/types/TLogin';
import axios from 'axios';

export const userLogin = async (info: TLoginBasic): Promise<number> => {
  const response = await axios.post(constAPILogin, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...info }),
  });

  return response.status;
};
