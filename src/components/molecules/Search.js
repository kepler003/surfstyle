import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { Button, Icon } from 'atoms/atoms';


export default () => {

  const [isOpen, setIsOpen] = useState(false);


  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  };

  const autoFocus = input => input && input.focus();


  const handleKeyUp = (e) => {
    if (e.keyCode === 13) closeModal();
  };


  return (
    <>
      <Button 
        className= "header__nav-btn" 
        shape=     "rounded"
        onClick=   { openModal }
      >
        <Icon icon="search" />
      </Button>
      <ReactModal
        overlayClassName="search"
        className=       "search__content"
        parentSelector=  { () => document.querySelector('#root') }
        appElement=      { document.querySelector('#root') }
        isOpen=          { isOpen }
        onRequestClose=  { closeModal }
        closeTimeoutMS=  { 250 }
      >
        <div className="search__box">
          <input 
            className=   "search__input input" 
            type=        "text" 
            placeholder= "Search..."
            ref=         { autoFocus }
            onKeyUp={ handleKeyUp }
          />
          <Button
            className="search__btn"
            bgColor="primary"
            shape="rounded"
            onClick={ closeModal }
          >
            <Icon icon="search" />
          </Button>
        </div>
      </ReactModal>
    </>
  );
};