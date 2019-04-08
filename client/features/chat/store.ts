import { createStore, createStoreObject } from 'effector';

import { MessageApi } from '../../api';

import { IBlock } from '../../../types';

import { Message, MessageView } from './types';

import { onChangeName, onMessageList } from './events';

import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, format } from 'date-fns';


const diff = (date: Date) => {
  const now = new Date();

  const day = differenceInDays(now, date);

  if (day) {
    return `${day} day`
  }

  const hours = differenceInHours(now, date);

  if (hours) {
    return format(date, 'HH:MM');
  }

  const min = differenceInMinutes(now, date);

  if (min) {
    return `${min} min`
  }

  const sec = differenceInSeconds(now, date);

  if (sec) {
    return `${sec} sec`
  }

  return 'now';
}

const userName = createStore<string>(localStorage.getItem('username') || '').on(onChangeName, (_state, payload) => payload);


MessageApi.subscribeMessageUpdate((data) => onMessageList(data));

const messageList = createStore<MessageView[]>([])
  .on<IBlock.Block<Message>[]>(onMessageList, (_state, payload) =>
    payload.sort((a, b) => a.meta.blockLevel - b.meta.blockLevel).map((x) => ({
      ...x.data,
      isMyMessage: x.data.author === userName.getState(),
      blockHash: x.blockHash,
      date: x.meta.date ? diff(new Date(x.meta.date)) : '',
    })));

messageList.watch(console.log);

const blockListStore = createStore<IBlock.Block<Message>[]>([])
  .on<IBlock.Block<Message>[]>(onMessageList, (_state, payload) => payload);


blockListStore.watch(console.log);

const store = createStoreObject({
  messageList,
});

export {
  store,
  userName,
  blockListStore,
}
