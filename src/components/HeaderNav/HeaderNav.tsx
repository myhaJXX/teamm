import { constHeaderLinks } from '@/constants/constHeaderLinks';
import React from 'react';
import CLink from '../CLink/CLink';

const HeaderNav = () => {
  return (
    <nav>
      {constHeaderLinks.map((link) => (
        <CLink text={link.title} href={link.href} key={link.href} />
      ))}
    </nav>
  );
};

export default HeaderNav;
