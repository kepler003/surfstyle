import { config } from "@fortawesome/fontawesome-svg-core";

const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export default (config, cb) => {
  
  try {
    
    if (config === undefined) throw new Error('Config is not sepcified.');
  
    const { xs, sm, md, lg, xl, oneSize = true } = config;
    const width = window.outerWidth;

    if (typeof config === 'number') {
      if (cb === undefined) throw new Error('Callback function is not specified.');
      if (window.outerWidth > config) cb();
      return;
    }

    if (oneSize) {
      if (!!xs && width >= breakpoints.xs && width < breakpoints.sm) { xs(); return; };
      if (!!sm && width >= breakpoints.sm && width < breakpoints.md) { sm(); return; };
      if (!!md && width >= breakpoints.md && width < breakpoints.lg) { md(); return; };
      if (!!lg && width >= breakpoints.lg && width < breakpoints.xl) { lg(); return; };
      if (!!xl && width >= breakpoints.xl) { xl(); return; };
    } else {
      if (!!xs && width >= breakpoints.xs) { xs(); return; };
      if (!!sm && width >= breakpoints.sm) { sm(); return; };
      if (!!md && width >= breakpoints.md) { md(); return; };
      if (!!lg && width >= breakpoints.lg) { lg(); return; };
      if (!!xl && width >= breakpoints.xl) { xl(); return; };
    };

  } catch (err) {
    console.log(err);
  }
};