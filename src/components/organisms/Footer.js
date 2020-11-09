import React from 'react';
import Button from 'atoms/Button';
import Icon from 'atoms/Icon';

export default () => (
  <footer className="footer">
    <ul className="footer__list">
      <span className="footer__label">INFOS</span>
      <li className="footer__item"><a className="footer__link" href="">Lorem ipsum</a></li>
      <li className="footer__item"><a className="footer__link" href="">Dolor sit</a></li>
      <li className="footer__item"><a className="footer__link" href="">Amet</a></li>
      <li className="footer__item"><a className="footer__link" href="">Consectetur</a></li>
      <li className="footer__item"><a className="footer__link" href="">Adipiscing</a></li>
    </ul>
    <ul className="footer__list">
      <span className="footer__label">SOCIAL MEDIA</span>
      <li className="footer__item">
        <Button shape="icon" ><Icon icon="facebook"/></Button>
      </li>
      <li className="footer__item">
        <Button shape="icon" ><Icon icon="twitter"/></Button>
      </li>
      <li className="footer__item">
        <Button shape="icon" ><Icon icon="instagram"/></Button>
      </li>
    </ul>
    <ul className="footer__list footer__list--last">
      <span className="footer__label">ABOUT US</span>
      <li className="footer__item"><a className="footer__link" href="">Lorem</a></li>
      <li className="footer__item"><a className="footer__link" href="">Ipsum dolor</a></li>
      <li className="footer__item"><a className="footer__link" href="">Sit</a></li>
      <li className="footer__item"><a className="footer__link" href="">Amet consectetu</a></li>
      <li className="footer__item"><a className="footer__link" href="">Adipiscing</a></li>
    </ul>
  </footer>
);