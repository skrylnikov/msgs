import { createEvent, createStore, createStoreObject } from 'effector';

import { MessageApi } from '../../api';
import { Message as IIMessage } from '../../../types/message';

import { Message } from './types';

const onChangeName = createEvent<string>(' change name');

const userName = createStore<string>(localStorage.getItem('username') || '').on(onChangeName, (_state, payload) => payload);

const onMessageList = createEvent<IIMessage[]>('message list');

MessageApi.subscribeMessageUpdate((data) => onMessageList(data));

const messageList = createStore<Message[]>([])
  .on<IIMessage[]>(onMessageList, (_state, payload) =>
    payload.map((x) => ({ ...x, isMyMessage: x.author === userName.getState() })));

messageList.watch(console.log)

const store = createStoreObject({
  messageList,
});

export {
  store,
}
