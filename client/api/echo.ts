import { post } from './http';

const echo = <T=any>(data: T) => post<T>('echo', data);

export {
  echo,
};
