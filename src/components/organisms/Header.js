import React, { useEffect, useState } from 'react';
import { Logo } from 'atoms/atoms';
import { HeaderNav } from 'molecules/molecules';

export default () => {
  
  const [isActive, setIsActive] = useState(false);

  
  useEffect(() => {
    window.addEventListener('scroll', toggleHeader);
    
    return () => {
      window.removeEventListener('scroll', toggleHeader);
    };
  }, []);


  const toggleHeader = () => setIsActive(() => window.scrollY > 0);

  
  return (
    <header className={`header${isActive ? ' header--active' : ''}`}>
      <Logo />
      <HeaderNav />
    </header>
  );
};