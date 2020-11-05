import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default ({ icon = "question", color, className = '', ...rest }) => {

  let newClassName = className;

  // Set icon color
  switch (color) {
    case 'primary':   newClassName += ' icon--primary';    break;
    case 'secondary': newClassName += ' icon--secondary';  break;
    case 'gray':      newClassName += ' icon--gray';       break;
    case 'white':     newClassName += ' icon--white';      break;
    default:          newClassName += ' icon--font-color'; break;
  }

  return (
    <FontAwesomeIcon icon={ icon } className={ newClassName } { ...rest } />
  );
};