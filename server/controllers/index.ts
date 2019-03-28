import { echo } from './echo';
import { sendMessage } from './message';
import { status } from './status';

import { ISocket } from '../../types';


const controllerMap = new Map([
  [ISocket.EventType.echo, echo],
  [ISocket.EventType.newBlock, sendMessage],
]);

const controllerList = {
  [ISocket.EventType.echo]: echo,
  [ISocket.EventType.newBlock]: sendMessage,
  [ISocket.EventType.blockList]: () => ({}),
  [ISocket.EventType.status]: status,
}

export {
  controllerMap,
  controllerList,
}