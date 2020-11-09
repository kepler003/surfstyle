import React from 'react';
import Button from 'atoms/Button';

export default () => {
  return (
    <article className="learn">
      <h2 className="learn__heading">LEARN TO SURF <br className="learn__line-break" /> WITH US</h2>
      <p className="learn__info">Surfing is such a great way to enjoy yourself in the ocean and we want ot teach you to surf whilst at the same time making sure you have a safe and super and super fun time! We have had years of experience teaching so many people to surf all over the world.</p>
      <Button className="learn__btn--more" bgColor="primary" shape="wide" bold>More</Button>
    </article>
  );
};