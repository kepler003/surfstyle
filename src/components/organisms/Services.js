import React, { useState } from 'react';
import Button from 'atoms/Button';
import girlImage from 'images/girl.jpg';
import groupImage from 'images/group.jpg';
import teamImage from 'images/team.jpg';

export default () => {

  const [data] = useState([{
      label: 'kids & families',
      text: 'We have had years of eperience teaching so many people to surf from all over the world!',
      image: girlImage
    }, {
      label: 'stag & hen',
      text: 'We have had years of eperience teaching so many people to surf from all over the world!',
      image: groupImage
    }, {
      label: 'team building',
      text: 'We have had years of eperience teaching so many people to surf from all over the world!',
      image: teamImage
  }]);
  
  return (
    <article className="services">
      <div className="services__tile services__tile--main">
        <h3 className="services__subheading">SERVICES</h3>
        <h2 className="services__heading">MOANA ACTIVITIES</h2>
        <p className="services__info">We have had years of eperience teaching so many people to surf from all over the world!</p>
        <Button className="services__btn" bgColor="primary" shape="wide" bold>Book now</Button>
      </div>
      {
        data.map((item, index) => (
          <div key={index} className="services__tile services__card">
            <img className="services__card-image" src={item.image} alt={item.label.toLowerCase()} />
            <h4 className="services__card-label">{item.label.toUpperCase()}</h4>
            <p className="services__card-info">{item.text}</p>
          </div>
        ))
      }
    </article>
  );
};