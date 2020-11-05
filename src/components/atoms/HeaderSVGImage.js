import React, { useRef, useEffect, useState } from 'react';
import image from 'images/surfing.jpg';

export default () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [viewBox, setViewBox] = useState("0 0 0 0");
  const [path, setPath] = useState(null);
  const aplitude = 0.15;
  const ref = useRef(null);


  useEffect(() => {
    window.addEventListener('load', updateSize);
    window.addEventListener('resize', updateSize);
    
    return () => {
      window.removeEventListener('load', updateSize);
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  useEffect(() => {
    setViewBox(`0 0 ${size.width} ${size.height}`);
    setPath(`
      M0 ${size.height * aplitude}
      L0 ${size.height}
      L${size.width} ${size.height}
      L${size.width} ${size.height * aplitude}
      Q${size.width * 3 / 4} ${size.height * aplitude * 2} ${size.width / 2} ${size.height * aplitude}
      Q${size.width * 1 / 4} 0 0 ${size.height * aplitude}
    `);
  }, [size]);
  

  const updateSize = () => {
    const size = {
      width: ref.current.clientWidth,
      height: ref.current.clientHeight
    };
    setSize(size);
  };


  return (
    <div ref={ ref } className="welcome__img">
      <svg viewBox={ viewBox }>
        <g fill="url(#header-background-image)">
          <path
            vectorEffect="non-scaling-stroke"
            d={ path }
          />
        </g>
        <defs>
          <pattern
            id="header-background-image"
            patternUnits="userSpaceOnUse"
            width="100%"
            height="100%"
          >
            <image
              href={image}
              x="0"
              y={-size.width * 0.6 + 80}
              width="100%"
            />
          </pattern>
        </defs>
      </svg>
    </div>
  );
};