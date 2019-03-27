import { createEvent } from 'effector';

import { IMessage } from '../../../types';


const onChangeName = createEvent<string>(' change name');

const onMessageList = createEvent<IMessage.Message[]>('message list');

export {
  onChangeName,
  onMessageList,
}