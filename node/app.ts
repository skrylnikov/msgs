import WebSocket from 'ws';
import { decode, encode } from '@msgpack/msgpack';
import { MessageTypes } from '../api';

import { controllers } from './controlletrs';

const wss = new WebSocket.Server({
  port: 4000,
});

type Message = {
  id: string;
  type: MessageTypes;
  payload: any | null;
  meta: any | null;
};


wss.on('connection', (ws)=>{
  ws.on('message', async (buffer)=>{
    if(!(buffer instanceof Buffer)){
      console.log(buffer);
      return;
    }
    const message = decode(buffer) as Message;
    console.log(message);

    const func = controllers[message.type];

    const result = await func(message.payload);

    if(result.reply){
      ws.send(encode({
        type: message.type,
        payload: result.payload,
        meta: result.meta,
        id: message.id,
      }));
    }

  })
});

