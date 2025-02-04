import { IModal } from '@/models/interfaces/IModal';
import { IRegLogButton } from '@/models/interfaces/IRegLogButton';
import React, { Dispatch, FC } from 'react';

interface Iprops extends IRegLogButton {
  setAction: Dispatch<IModal>;
}

const handleClick = (action: string, setAction: Dispatch<IModal>) => {
  return () => {
    setAction({ mode: action, isOpen: true });
  };
};

export const RegLogButton: FC<Iprops> = ({ text, action, setAction }) => {
  return <button onClick={handleClick(action, setAction)}>{text}</button>;
};
