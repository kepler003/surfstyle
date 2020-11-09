import React from 'react';
import Button from 'atoms/Button';
import image from 'images/surfboard.png';

export default () => (
  <article className="places">
    <p className="places__subheading">Welcome to Hoana surf school</p>
    <h2 className="places__heading">GUINCHO BEACH - CASCAIS - CALIFORNIA</h2>
    <p className="places__info">Surfing is such a great way to enjoy yourself in the ocean and we want ot teach you to surf whilst at the same time making sure you have a safe and super and super fun time! We have had years of experience teaching so many people to surf all over the world.</p>
    <Button className="places__btn" bgColor="primary" shape="wide" bold>Sign up</Button>
    <img className="places__img" src={ image } alt="surfboard" />
  </article>
);