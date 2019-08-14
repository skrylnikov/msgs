import { MessageTypes } from '../../api';

import { checkConnection } from './checkConnection';
import { register } from './register';
import { checkLogin } from './checkLogin';

export const controllers = {
  [MessageTypes.checkConnection]: checkConnection,
  [MessageTypes.register]: register,
  [MessageTypes.checkLogin]: checkLogin,
};
