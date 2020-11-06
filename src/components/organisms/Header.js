import React from 'react';
import { Logo } from 'atoms/atoms';
import { HeaderNav } from 'molecules/molecules';

export default () => (
  <header className="header">
    <Logo />
    <HeaderNav />
  </header>
);