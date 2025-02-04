import { constRegLogButtons } from '@/constants/constRegLogButtons';
import React, { useState } from 'react';
import { RegLogButton } from '../RegLogButton.tsx/RegLogButton';
import { IModal } from '@/models/interfaces/IModal';
import { createPortal } from 'react-dom';
import ModalRegLog from '../ModalRegLog/ModalRegLog';
import { constAccountLogin } from '@/constants/constAccount';

const RegLog = () => {
  const [action, setAction] = useState<IModal>({
    mode: constAccountLogin,
    isOpen: false,
  });

  return (
    <div>
      {constRegLogButtons.map((button) => (
        <RegLogButton {...button} setAction={setAction} key={button.action} />
      ))}

      {action.isOpen &&
        createPortal(<ModalRegLog mode={action.mode} />, document.body)}
    </div>
  );
};

export default RegLog;
