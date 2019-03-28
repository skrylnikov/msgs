import { createEvent } from 'effector';

import { IBlock } from '../../../types';

import { Message } from './types';

const onChangeName = createEvent<string>(' change name');

const onMessageList = createEvent<IBlock.Block<Message>[]>('message list');

export {
  onChangeName,
  onMessageList,
}