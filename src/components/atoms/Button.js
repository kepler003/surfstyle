import React from 'react';


export default ({ children, className, shape, bgColor, color, bold, ...rest }) => {

  let newClassName = `${ className } button`;

  // Set bold text
  if (!!bold) newClassName += ' button--bold' 

  // Set shape
  switch (shape) {
    case undefined: break;
    case 'rounded': newClassName += ' button--icon'; break;
    case 'wide':    newClassName += ' button--wide'; break;
  };
  
  // Set background color
  switch (bgColor) {
    case undefined:     break;
    case 'primary':     newClassName += ' button--primary'; break;
    case 'transparent': newClassName += ' button--transparent'; break;
  }
  
  // Set text color
  switch (color) {
    case undefined:   break;
    case 'gray':      newClassName += ' button--color-gray'; break;
    case 'white':     newClassName += ' button--color-white'; break;
  }
  
  return (
    <button className={ newClassName } type="button" { ...rest }>{ children }</button>
  );
};