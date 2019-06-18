import { ISocket, IBlock } from '../../types';
import { Options } from '../types/socket';

import { subscribeConnect } from '../socket';


//const adapter = new FileSync('__data/message.json');

import FrameDb from 'framedb';


//a.loadDatabase('__data/message').then((a) => console.log(a));

const db = new FrameDb({
  'filePath': '__data/message',
  'openAutomatically': true
});

let messageList: IBlock.Block[] = db.memoryStorage.map((x) => ({ ...x, _id: undefined })) as any;

//db.allDocs({ include_docs: true }).then((x) => messageList = x.rows.map((x) => x.doc));

subscribeConnect(() => ({
  type: ISocket.EventType.blockList,
  data: messageList,
}));

export const sendMessage = async (block: IBlock.Block, { sendAll }: Options) => {
  console.log(block);
  messageList.push(block);

  db.insertOne(block);

  sendAll({
    type: ISocket.EventType.blockList,
    data: messageList,
  });
}

