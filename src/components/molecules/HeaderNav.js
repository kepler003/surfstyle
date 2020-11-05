import React from 'react';
import Button from 'atoms/Button';
import Icon from 'atoms/Icon';

export default () => (
  <nav className="header__nav">
    <Button className="header__nav-btn" shape="rounded"><Icon icon="share-alt" /></Button>
    <Button className="header__nav-btn" shape="rounded"><Icon icon="instagram" /></Button>
    <Button className="header__nav-btn" shape="rounded"><Icon icon="search" /></Button>
    <Button className="header__nav-btn" shape="rounded"><Icon icon="bars" /></Button>
  </nav>
);