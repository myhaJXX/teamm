'use client';
import { useAppDispatch } from '@/hooks/useTypedRedux';
import { profileRequest } from '@/store/reducers/profileSlice';
import React from 'react';

const Comp2 = () => {
  const dis = useAppDispatch();
  return (
    <div
      onClick={() =>
        dis(
          profileRequest({
            actionButton: 'login',
            tg: null,
            login: 'serggg',
            password: '1258',
          })
        )
      }
    >
      login
    </div>
  );
};

export default Comp2;
