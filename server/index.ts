import SocketIO from 'socket.io';
import Msgpack from 'msgpack5';

import { ISocket } from '../types';

import { controllerList } from './controllers';

import { subscribeConnectSet } from './socket';

const msgpack = Msgpack();

const io = SocketIO({});

io.origins('*:*');
const sendAll = (message: ISocket.Events) => {
  io.emit('event', msgpack.encode({
    type: message.type,
    data: message.data,
    corr: null,
  }));
};


io.on('connection', (client) => {
  console.log('connected');

  subscribeConnectSet.forEach(async (func) => {
    const result = await func();
    client.emit('event', msgpack.encode({
      type: result.type,
      data: result.data,
      corr: null,
    }));
  })

  client.on('event', async (rawBody: any) => {
    const body: ISocket.Events = msgpack.decode(rawBody);


    const func = controllerList[body.type];

    if (!func) {
      console.error(body);
      return;
    }


    const result = await func(body.data, { sendAll });
    if (!result) {
      return;
    }

    client.emit('event', msgpack.encode({
      type: body.type,
      data: result,
      corr: body.corr,
    }));

  });

});


io.listen(3000);