import { Waterfall } from 'hydrated-ws/dist/waterfall/Waterfall';
import { encode, decode } from '@msgpack/msgpack';
import nanoid from 'nanoid';

import { MessageTypes } from '../../api';

const ws  = new Waterfall('ws://127.0.0.1:4000');
type Message = {
  id: string;
  type: MessageTypes;
  payload: any | null;
  meta: any | null;
};

ws.onopen = ()=>{
  setInterval(()=>{
    //ws.send('hello');
  }, 1000);
}
ws.onmessage = async (ev)=>{
  //@ts-ignore
  const buffer = ev.data instanceof Blob ? (await ev.data.arrayBuffer()): ev.data;
  const data = decode(buffer) as Message;

  const requestMap = requestMapMap.get(data.type);

  if(!requestMap){
    return;
  }

  const resolve = requestMap.get(data.id);

  if(!resolve){
    return;
  }

  resolve(data.payload);

  
}


const sendMessage = async (type:MessageTypes, payload?: any, meta?: any)=>{

  const id = nanoid(4); 
  const data = encode({
    type,
    payload,
    meta,
    id,
  });
  while(ws.readyState !== WebSocket.OPEN){
    console.log('pause');
    await new Promise((resolve)=> setTimeout(resolve, 10));
  }
  ws.send(data);
  return id;
}

const requestMapMap = new Map<MessageTypes, Map<string, (data: any)=>void>>();

export const senRequst = async (type:MessageTypes, payload?: any, meta?: any)=>{
  const requestId = await sendMessage(type, payload, meta);
  if(!requestMapMap.has(type)){
    requestMapMap.set(type, new Map());
  }

  const requestMap = requestMapMap.get(type);

  if(!requestMap){
    throw Error;
  }

  return new Promise((resolve)=>{
    requestMap.set(requestId, resolve);
  });
}

(async()=>{
  const r = await senRequst(MessageTypes.checkConnection);

  console.log(r);

})();

