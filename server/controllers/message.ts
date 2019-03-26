import { IMessage, ISocket } from '../../types';
import { Options } from '../types/socket';

import { subscribeConnect } from '../socket';

const messageList: IMessage.Message[] = [];

subscribeConnect(() => ({
  type: ISocket.EventType.messageList,
  data: messageList,
}));

export const sendMessage = (message: IMessage.Message, { sendAll }: Options) => {
  console.log(message);
  messageList.push({
    ...message,
    id: messageList.length,
  });

  sendAll({
    type: ISocket.EventType.messageList,
    data: messageList,
  });
}

