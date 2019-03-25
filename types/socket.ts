import { Message } from './message';

enum EventType {
  'echo' = -1,
  'status' = 0,
  'sendMessage' = 1,
  'messageList' = 2,
}

interface EchoEvent<Data=any> {
  type: EventType.echo;
  data: Data;
  corr?: string | null;
}

interface SendMessageEvent {
  type: EventType.sendMessage;
  data: Message;
  corr?: string | null;
}

interface MessageListEvent {
  type: EventType.messageList;
  data: Message[];
  corr?: string | null;
}



type Events = EchoEvent | SendMessageEvent | MessageListEvent;

export {
  EventType,
  EchoEvent,
  Events,
  SendMessageEvent,
  MessageListEvent,
}