import { constAPIRegister } from '@/constants/constAPI';
import { ILogin } from '@/models/interfaces/ILogin';
import { IProfile } from '@/models/interfaces/IProfile';
import axios from 'axios';

export const apiUserRegister = async (info: ILogin): Promise<IProfile> => {
  const response = await axios.post(constAPIRegister, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...info }),
  });

  return response.data;
};
