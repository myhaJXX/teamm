import Link from 'next/link';
import React, { FC } from 'react';

interface IProps {
  text: string;
  href: string;
}

const CLink: FC<IProps> = ({ text, href }) => {
  return <Link href={href}>{text}</Link>;
};

export default CLink;
