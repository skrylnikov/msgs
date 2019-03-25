import io from 'socket.io-client';

import Msqpack from 'msgpack5';

import { ISocket } from '../../types';

import nanoid from 'nanoid';

const msgpack = Msqpack();

const socket = io.connect('ws://localhost:3000', {
  transports: ['websocket', 'polling'],
});

const requestMap = new Map<string, (data: any) => void>();

const subscribeMap = new Map<ISocket.EventType, Array<(data: any) => void>>();


socket.on('connect', () => {
  console.log('connected');
});

const subscribe = (type: ISocket.EventType, func: (data: any) => void) => {
  if (!subscribeMap.has(type)) {
    subscribeMap.set(type, []);
  }
  subscribeMap.get(type).push(func);
};

socket.on('event', (rawData: any) => {
  const data: ISocket.Events = msgpack.decode(rawData);
  if (requestMap.has(data.corr)) {
    requestMap.get(data.corr)(data.data);
  }
  console.log(data);
  if (subscribeMap.has(data.type)) {
    subscribeMap.get(data.type).forEach((func) => func(data.data));
  }
});


const send = ({
  data = {},
  corr = null,
  type,
}: ISocket.Events) => {
  socket.emit('event', msgpack.encode({
    data,
    corr,
    type,
  }));
};



const sendRequest = <T>(body: ISocket.Events): Promise<T> => {
  const corr = nanoid(6);

  send({ data: body.data, type: body.type, corr } as any);

  return new Promise((resolve) => {
    requestMap.set(corr, resolve);
  });
}

export {
  send,
  sendRequest,
  subscribe,
}