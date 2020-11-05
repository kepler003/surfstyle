import React from 'react';
import Logo from 'atoms/Logo';
import Button from 'atoms/Button';
import Icon from 'atoms/Icon';

export default () => (
  <header className="header">
    <Logo />
    <Button shape="icon">
      <Icon icon="user" />
    </Button>
  </header>
);