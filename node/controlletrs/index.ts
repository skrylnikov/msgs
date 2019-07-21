import { MessageTypes } from '../../api';

import { checkConnection } from './checkConnection';
import { register } from './register';

export const controllers = {
  [MessageTypes.checkConnection]: checkConnection,
  [MessageTypes.register]: register,
};
