'use client';
import { ILogin } from '@/models/interfaces/ILogin';
import React, { FC, useState } from 'react';
import { UIInput } from '../ui/uiInput';
import { constInputs } from '@/constants/constInputs';
import { UIButton } from '../ui/uiButton';
import {
  constAccountLogin,
  constAccountRegister,
} from '@/constants/constAccount';
import { useAppDispatch } from '@/hooks/useTypedRedux';
import { profileRequest } from '@/store/reducers/profileSlice';

interface IProps {
  mode: string;
}

const ModalRegLog: FC<IProps> = ({ mode }) => {
  const [info, setInfo] = useState<ILogin>({
    tg: '',
    login: '',
    password: '',
  });

  const dis = useAppDispatch();
  return (
    <form>
      {constInputs.map(({ value, placeholder }) => (
        <UIInput
          key={value}
          value={info[`${value}`]}
          placeholder={placeholder}
          onChange={(e) => setInfo({ ...info, [`${value}`]: e.target.value })}
        />
      ))}
      <UIButton
        onClick={(e) => {
          e.preventDefault();
          dis(profileRequest({ ...info, actionButton: mode }));
        }}
      >
        {mode === constAccountLogin ? constAccountLogin : constAccountRegister}
      </UIButton>
    </form>
  );
};

export default ModalRegLog;
