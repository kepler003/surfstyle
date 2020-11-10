import React from 'react';
import { Button, Icon } from 'atoms/atoms';
import { Search, Menu } from 'molecules/molecules';


export default () => (
  <nav className="header__nav">
    <Button className="header__nav-btn" shape="rounded"><Icon icon="share-alt" /></Button>
    <Button className="header__nav-btn" shape="rounded"><Icon icon="instagram" /></Button>
    <Search />
    <Menu />
  </nav>
);