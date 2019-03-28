import { ISocket, IBlock } from '../../types';
import { Options } from '../types/socket';

import { subscribeConnect } from '../socket';


const messageList: IBlock.Block[] = [];

subscribeConnect(() => ({
  type: ISocket.EventType.blockList,
  data: messageList,
}));

export const sendMessage = (block: IBlock.Block, { sendAll }: Options) => {
  console.log(block);
  messageList.push(block);

  sendAll({
    type: ISocket.EventType.blockList,
    data: messageList,
  });
}

