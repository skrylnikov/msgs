import { echo } from './echo';
import { sendMessage } from './message';
import { status } from './status';

import { ISocket } from '../../types';


const controllerMap = new Map([
  [ISocket.EventType.echo, echo],
  [ISocket.EventType.sendMessage, sendMessage],
]);

const controllerList = {
  [ISocket.EventType.echo]: echo,
  [ISocket.EventType.sendMessage]: sendMessage,
  [ISocket.EventType.messageList]: () => ({}),
  [ISocket.EventType.status]: status,
}

export {
  controllerMap,
  controllerList,
}