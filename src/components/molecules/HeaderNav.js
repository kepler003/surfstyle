import React from 'react';
import { Button, Icon } from 'atoms/atoms';
import Search from 'molecules/Search';


export default () => {

  return (
    <nav className="header__nav">
      <Button className="header__nav-btn" shape="rounded"><Icon icon="share-alt" /></Button>
      <Button className="header__nav-btn" shape="rounded"><Icon icon="instagram" /></Button>
      <Search />
      <Button className="header__nav-btn header__nav-btn--menu" shape="rounded">
        <Icon icon="bars" />
      </Button>
    </nav>
  )
};