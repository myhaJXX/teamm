import { IRegLogButton } from '@/models/interfaces/IRegLogButton';
import { constAccountLogin, constAccountRegister } from './constAccount';

export const constRegLogButtons: IRegLogButton[] = [
  { text: 'Sign Up', action: constAccountLogin },
  { text: 'Sign In', action: constAccountRegister },
];
