import { ILogin } from '../interfaces/ILogin';

export type TLoginBasic = Omit<ILogin, 'tg'>;
