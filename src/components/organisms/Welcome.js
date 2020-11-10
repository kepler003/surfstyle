import React from 'react';
import { HeaderSVGImage, Button, Icon } from 'atoms/atoms';


export default () => {

  const scrollToLearn = () => {
    const welcomeHeight = document.querySelector('.js-welcome').offsetHeight;
    const headerHeight = document.querySelector('.js-header').offsetHeight;

    window.scroll({
      top: welcomeHeight - headerHeight,
      behavior: 'smooth'
    });
  };


  return (
    <header className="welcome js-welcome">
      <p className="welcome__city">San Francisco</p>
      <h1 className="welcome__camp-name">SURFING <br/> CAMP 2021</h1>
      <div className="welcome__info-box">
        <h2 className="welcome__info-heading">35 TICKETS, 14 DAYS</h2>
        <p className="welcome__info-text">Even if you’re type who sits on the beach with your toes planted firmly in the sand, the world’s best surf spots still matter</p>
      </div>
      <div className="welcome__btn-box">
        <Button className="welcome__btn" shape="rounded" onClick={ scrollToLearn } >
          <Icon icon="play" color="white" />
        </Button>
      </div>
      <HeaderSVGImage />
    </header>
  );
};