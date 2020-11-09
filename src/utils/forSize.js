
const xs = 0;
const sm = 576;
const md = 768;
const lg = 992;
const xl = 1200;


const execOneFn = (size, cb) => {
  
  try {

    if (cb === undefined) throw new Error('Callback function is not specified.');
    if (window.innerWidth >= size) return cb();
    return;

  } catch(err) { console.log('execOneFn Error:', err); };
};

const execOneSize = (config) => {

  try {
    const width = window.innerWidth;

    if (!!config.xs && width >= xs && width < sm) { return config.xs(); };
    if (!!config.sm && width >= sm && width < md) { return config.sm(); };
    if (!!config.md && width >= md && width < lg) { return config.md(); };
    if (!!config.lg && width >= lg && width < xl) { return config.lg(); };
    if (!!config.xl && width >= xl) { return config.xl(); };

  } catch(err) { console.log('execOneSize Error:', err); };
};

const execToHigherSize = (config) => {

  try {
    const width = window.innerWidth;

    if (!!config.xl && width >= xl) { return config.xl(); };
    if (!!config.lg && width >= lg) { return config.lg(); };
    if (!!config.md && width >= md) { return config.md(); };
    if (!!config.sm && width >= sm) { return config.sm(); };
    if (!!config.xs && width >= xs) { return config.xs(); };

  } catch(err) { console.log('execToHigherSize Error:', err); };
};


export default (config, cb) => {
  
  try {
    
    if (config === undefined) throw new Error('Config is not sepcified.');
    
    const { mode = 'toHigher' } = config;

    if (typeof config === 'number') return execOneFn(config, cb);

    switch (mode) {
      case 'toHigher': return execToHigherSize(config);
      case 'oneSize':  return execOneSize(config);
      default: throw new Error(`Invalid function mode "${mode}"`);
    }

  } catch (err) { console.log(err); };
};