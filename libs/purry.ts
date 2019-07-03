export const purry = (func: (...funcArgs: any[]) => any) => (...args: any[]) => {
  if (args.length === 1) {
    return (arg2: any) => {
      if (typeof args[0] === 'function' && typeof arg2 === 'object') {
        return func(arg2, args[0]);
      }
      if (typeof args[0] === 'object' && typeof arg2 === 'function') {
        return func(args[0], arg2);
      }
      throw new Error('bad args');
    };
  }

  if (args.length === 2) {
    if (typeof args[0] === 'function' && typeof args[1] === 'object') {
      return func(args[1], args[0]);
    }
    if (typeof args[0] === 'object' && typeof args[1] === 'function') {
      return func(args[0], args[1]);
    }
    throw new Error('bad args');
  }
  throw new Error('bad args');
};