export enum MessageType {
  'text' = 1,
}

export interface Message {
  messageType: MessageType;
  text: string;
  author: string;
}

export interface MessageView extends Message {
  isMyMessage: boolean;
  blockHash: string;
  date: string;
}
