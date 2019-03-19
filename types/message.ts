enum MessageType {
  'text' = 1,
}

interface Message {
  messageType: MessageType;
  text: string;
  author: string;
  id?: number;
}

export {
  Message,
  MessageType,
}