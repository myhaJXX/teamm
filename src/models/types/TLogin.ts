import { ILogin } from '../interfaces/ILogin';

export type TLoginBasic = Omit<ILogin, 'tg'>;
export type TLogin = keyof ILogin;
