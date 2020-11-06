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
      if (window.outerWidth > config) return cb();
      return;
    }
    
    if (oneSize) {
      if (!!xs && width >= breakpoints.xs && width < breakpoints.sm) { return xs(); };
      if (!!sm && width >= breakpoints.sm && width < breakpoints.md) { return sm(); };
      if (!!md && width >= breakpoints.md && width < breakpoints.lg) { return md(); };
      if (!!lg && width >= breakpoints.lg && width < breakpoints.xl) { return lg(); };
      if (!!xl && width >= breakpoints.xl) { return xl(); };
    } else {
      if (!!xs && width >= breakpoints.xs) { return xs(); };
      if (!!sm && width >= breakpoints.sm) { return sm(); };
      if (!!md && width >= breakpoints.md) { return md(); };
      if (!!lg && width >= breakpoints.lg) { return lg(); };
      if (!!xl && width >= breakpoints.xl) { return xl(); };
    };

  } catch (err) {
    console.log(err);
  }
};