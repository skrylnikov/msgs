type MessageType = 'text';

interface Message {
  messageType: MessageType;
  text: string;
  isMyMessage: boolean;
  author: string;
}

export {
  Message,
  MessageType,
}