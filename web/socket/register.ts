import { senRequst } from './socket'
import nanoid from 'nanoid';
import { MessageTypes } from '../../api';

export const register = async (username: string) =>{
  const id = nanoid(64);
  await senRequst(MessageTypes.register, {
    username,
    id,
  });
  return true;
}
