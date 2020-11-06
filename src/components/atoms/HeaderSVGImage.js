import React, { useRef, useEffect, useState } from 'react';
import forSize from 'utils/forSize';
import image from 'images/surfing.jpg';


export default () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [viewBox, setViewBox] = useState("0 0 0 0");
  const [path, setPath] = useState(null);
  const [amplitude, setAmplitude] = useState(0.15);
  const imageRatio = 640 / 854;
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
    forSize({
      xs: () => { setPathXs(); },
      sm: () => { setPathSm(); },
      md: () => { setPathSm(); },
      lg: () => { setPathSm(); },
      xl: () => { setPathSm(); }
    });
  }, [size]);
  

  const updateSize = () => {
    const size = {
      width: ref.current.clientWidth,
      height: ref.current.clientHeight
    };
    setSize(size);
  };

  const setPathXs = () => {
    setPath(`
      M0 ${size.height * amplitude}
      L0 ${size.height}
      L${size.width} ${size.height}
      L${size.width} ${size.height * amplitude}
      Q${size.width * 3 / 4} ${size.height * amplitude * 2} ${size.width / 2} ${size.height * amplitude}
      Q${size.width * 1 / 4} 0 0 ${size.height * amplitude}
    `);
  };

  const setPathSm = () => {
    setPath(`
      M${size.width * amplitude} 0
      Q${size.width * amplitude * 2} ${size.height / 4} ${size.width * amplitude} ${size.height / 2}
      Q0 ${size.height / 4 * 3} ${size.width * amplitude} ${size.height}
      L${size.width * amplitude} ${size.height}
      L${size.width} ${size.height}
      L${size.width} ${0}
      Z
    `);
  };

  const getImageTemplateXs = () => (
    <image
      href={ image }
      x="0"
      y={ -size.width * 0.6 + 80 }
      width="100%"
    />
  );

  const getImageTemplateSm = () => (
    <image
      href={ image }
      x="0"
      y="0"
      { ...(size.width / size.height > imageRatio ? { width: "100%" } : { height: "100%" }) }
    />
  );

  
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
            {forSize({
              xs: getImageTemplateXs,
              sm: getImageTemplateSm,
              md: getImageTemplateSm,
              lg: getImageTemplateSm,
              xl: getImageTemplateSm,
            })}
          </pattern>
        </defs>
      </svg>
    </div>
  );
};

