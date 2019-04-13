import { echo } from './echo';
import { sendMessage } from './message';
import { status } from './status';

import { ISocket } from '../../types';

import { addUser } from './user';

const controllerList = {
  [ISocket.EventType.echo]: echo,
  [ISocket.EventType.newBlock]: sendMessage,
  [ISocket.EventType.blockList]: () => ({}),
  [ISocket.EventType.status]: status,
  [ISocket.EventType.newUserBlock]: addUser,
  [ISocket.EventType.userBlockList]: () => ({}),
}

export {
  controllerList,
}