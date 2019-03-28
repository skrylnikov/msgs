import { IBlock, ISocket } from '../../types';

import { Message } from '../features/chat/types';

import { send, subscribe } from './socket';

type Unpacked<T> =
  T extends (infer U)[] ? U :
  T extends (...args: any[]) => infer U ? U :
  T extends Promise<infer U> ? U :
  T;

const subscribeMessageUpdate = (func: (message: IBlock.Block<Message>[]) => void) => subscribe(ISocket.EventType.blockList, func);

const sendMessage = (message: IBlock.Block<Message>) => send({ type: ISocket.EventType.newBlock, data: message });

type ResponseSend = Unpacked<ReturnType<typeof send>>;

export {
  sendMessage,
  ResponseSend,
  subscribeMessageUpdate,
};
