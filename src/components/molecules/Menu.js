import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Button, Icon } from 'atoms/atoms';


export default () => {

  const [isOpen, setIsOpen] = useState(false);
  const [willClose, setWillClose] = useState(false);


  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
    setWillClose(true);
  };

  const getParentSelector = () => document.querySelector('#root');


  const handleLinkClick = (e) => {
    e.preventDefault();
    closeModal();
  };


  return (
    <>
      <Button
        className="header__nav-btn header__nav-btn--menu"
        shape="rounded"
        onClick={ openModal }
      >
        <Icon icon="bars" />
      </Button>
      <ReactModal
        overlayClassName={`menu ${willClose ? 'menu--close' : ''}`}
        className=       {`menu__content ${willClose ? 'menu__content--close' : ''}}`}
        parentSelector=  { getParentSelector }
        appElement=      { document.querySelector('#root') }
        isOpen=          { isOpen }
        onRequestClose=  { closeModal }
        onAfterClose=    { () => setWillClose(false) }
        closeTimeoutMS=  { 250 }
      >
        <div className="menu__box">
          <ul className="menu__list">
            <li className="menu__item">
              <a className="menu__link" href="/" onClick={ handleLinkClick }>SIGN UP</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="/" onClick={ handleLinkClick }>ABOUT US</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="/" onClick={ handleLinkClick }>SEARCH</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="/" onClick={ handleLinkClick }>INSTAGRAM</a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="/" onClick={ handleLinkClick }>SHARE</a>
            </li>
          </ul>
        </div>
      </ReactModal>
    </>
  );
};