import { createStore, createStoreObject } from 'effector';

import { MessageApi } from '../../api';

import { IBlock } from '../../../types';

import { Message, MessageView } from './types';

import { onChangeName, onMessageList } from './events';

const userName = createStore<string>(localStorage.getItem('username') || '').on(onChangeName, (_state, payload) => payload);


MessageApi.subscribeMessageUpdate((data) => onMessageList(data));

const messageList = createStore<MessageView[]>([])
  .on<IBlock.Block<Message>[]>(onMessageList, (_state, payload) =>
    payload.map((x) => ({ ...x.data, isMyMessage: x.data.author === userName.getState(), blockHash: x.blockHash })));

messageList.watch(console.log);

const blockListStore = createStore<IBlock.Block<Message>[]>([])
  .on<IBlock.Block<Message>[]>(onMessageList, (_state, payload) => payload);

const store = createStoreObject({
  messageList,
});

export {
  store,
  userName,
  blockListStore,
}
