import SocketIO from 'socket.io';
import Msgpack from 'msgpack5';

import { ISocket } from '../types';

import { controllerMap } from './controllers';

const msgpack = Msgpack();

const io = SocketIO({});

io.origins('*:*');

io.on('connection', (client) => {
  console.log('connected');

  client.on('event', async (rawBody: any) => {
    const body: ISocket.Events = msgpack.decode(rawBody);

    if (!controllerMap.has(body.type)) {
      console.error(body);
      return;
    }

    const func = controllerMap.get(body.type);

    const result = await func(body.data);
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