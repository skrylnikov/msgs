import { post, get } from './http';

import { IApi, IMessage } from '../../types';
import { EventType } from '../../types/api';

type Unpacked<T> =
  T extends (infer U)[] ? U :
  T extends (...args: any[]) => infer U ? U :
  T extends Promise<infer U> ? U :
  T;

interface INotUpdate {
  type: EventType.notUpdate;
}

interface IUpdateMessageList {
  type: EventType.updateMessageList;
  data: IMessage.Message[];
}

type ResponseList = INotUpdate | IUpdateMessageList

const poll = () => post<ResponseList>('poll', {});

type ResponsePoll = Unpacked<ReturnType<typeof poll>>;

export {
  poll,
  ResponsePoll,
};
