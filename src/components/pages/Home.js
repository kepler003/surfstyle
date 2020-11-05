import React from 'react';
import Header from 'organisms/Header';
import HeaderSVGImage from 'atoms/HeaderSVGImage';

export default () => (
  <>
    <Header />
    <main className="main">
      <header className="welcome">
        <p className="welcome__city">San Francisco</p>
        <h1 className="welcome__camp-name">SURFING <br/> CAMP 2021</h1>
        <div className="welcome__info-box">
          <h2 className="welcome__info-heading">35 TICKETS, 14 DAYS</h2>
          <p className="welcome__info-text">Even if you’re type who sits on the beach with your toes planted firmly in the sand, the world’s best surf spots still matter</p>
        </div>
        <HeaderSVGImage />
      </header>
    </main>
  </>
);