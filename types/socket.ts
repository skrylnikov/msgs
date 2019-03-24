enum EventType {
  'echo' = -1,
  'status' = 0,
  'sendMessage' = 1,
  'messageList' = 2,
}

interface EchoEvent<Data=any> {
  type: EventType;
  data: Data;
  corr?: string | null;
}

type Events = EchoEvent;

export {
  EventType,
  EchoEvent,
  Events,

}