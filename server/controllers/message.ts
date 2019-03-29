import { ISocket, IBlock } from '../../types';
import { Options } from '../types/socket';

import { subscribeConnect } from '../socket';
import PouchDB from 'pouchdb';

const db = new PouchDB<IBlock.Block>('__data/message');

let messageList: IBlock.Block[] = [];

db.allDocs({ "include_docs": true }).then((x) => messageList = x.rows.map((x) => x.doc));

subscribeConnect(() => ({
  type: ISocket.EventType.blockList,
  data: messageList,
}));

export const sendMessage = async (block: IBlock.Block, { sendAll }: Options) => {
  console.log(block);
  messageList.push(block);

  await db.post(block);


  sendAll({
    type: ISocket.EventType.blockList,
    data: messageList,
  });
}

