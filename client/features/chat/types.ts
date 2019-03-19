import { IMessage } from '../../../types';


interface Message extends IMessage.Message {
  isMyMessage: boolean;
}

export {
  Message,
}