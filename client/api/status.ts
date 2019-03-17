import { get } from './http';

const status = () => get('status');

export {
  status,
}