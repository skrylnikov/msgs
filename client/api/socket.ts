import io from 'socket.io-client';

import Msqpack from 'msgpack5';

import { ISocket } from '../../types';

import nanoid from 'nanoid';

const msgpack = Msqpack();

const socket = io.connect('ws://localhost:3000', {
  transports: ['websocket', 'polling'],
});

const requestMap = new Map<string, (data: any) => void>();

socket.on('connect', () => {
  console.log('connected');
});

socket.on('event', (rawData: any) => {
  const data: ISocket.Events = msgpack.decode(rawData);
  if (requestMap.has(data.corr)) {
    requestMap.get(data.corr)(data.data);
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



const sendRequest = <T>({
  data,
  type,
}: ISocket.Events): Promise<T> => {
  const corr = nanoid(6);

  send({ data, type, corr });

  return new Promise((resolve) => {
    requestMap.set(corr, resolve);
  });
}

export {
  send,
  sendRequest,
}