import { ISocket, IBlock } from '../../types';
import { Options } from '../types/socket';

import { subscribeConnect } from '../socket';
import PouchDB from 'pouchdb';

const db = new PouchDB<IBlock.Block>('__data/users');

let userList: IBlock.Block[] = [];

db.allDocs({ include_docs: true }).then((x) => userList = x.rows.map((x) => x.doc));

subscribeConnect(() => ({
  type: ISocket.EventType.userBlockList,
  data: userList,
}));

export const addUser = async (block: IBlock.Block, { sendAll }: Options) => {
  console.log(block);
  userList.push(block);

  await db.post(block);


  sendAll({
    type: ISocket.EventType.userBlockList,
    data: userList,
  });
}

