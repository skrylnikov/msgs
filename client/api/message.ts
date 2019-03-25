import { post, get } from './http';

import { IApi, IMessage, ISocket } from '../../types';

import { send, subscribe } from './socket';

type Unpacked<T> =
  T extends (infer U)[] ? U :
  T extends (...args: any[]) => infer U ? U :
  T extends Promise<infer U> ? U :
  T;

const subscribeMessageUpdate = (func: (message: IMessage.Message[]) => void) => subscribe(ISocket.EventType.messageList, func);

const sendMessage = (message: IMessage.Message) => send({ type: ISocket.EventType.sendMessage, data: message });

type ResponseSend = Unpacked<ReturnType<typeof send>>;

export {
  sendMessage,
  ResponseSend,
  subscribeMessageUpdate,
};
