import { post, get } from './http';

import { IApi, IMessage } from '../../types';

type Unpacked<T> =
  T extends (infer U)[] ? U :
  T extends (...args: any[]) => infer U ? U :
  T extends Promise<infer U> ? U :
  T;

const list = () => get<IMessage.Message[]>('message');

type ResponseList = Unpacked<ReturnType<typeof list>>;

const send = (message: IMessage.Message) => post<{ status: IApi.Status }>('message', { message });

type ResponseSend = Unpacked<ReturnType<typeof send>>;

export {
  list,
  send,
  ResponseList,
  ResponseSend,
};
