import { createEffect } from 'effector';

import { MessageType, Message } from './types';

import { MessageApi } from '../../api';

import { userName, blockListStore } from './store';

import { IBlock } from '../../../types';

import { SHA3 } from 'sha3';

import MsgPack from 'msgpack5';
import { Sign } from '../../crypto';

const msgpack = MsgPack();

const sendMessage = createEffect<string, void, void>('sendMessage')
  .use(async (text) => {
    const realText = text.trim();
    const author = userName.getState().trim();
    if (realText.length === 0 || author.length === 0) {
      return;
    }

    const blockList = blockListStore.getState();

    const data: Message = {
      messageType: MessageType.text,
      text: realText,
      author,
    };

    const meta: IBlock.BlockMeta = {
      sign: await Sign.sign(data),
      version: 0,
      blockLevel: blockList.length,
      prevBlockHashList: blockList.length ? [blockList[0].blockHash] : [],
      date: new Date().valueOf(),
    };

    const hash = new SHA3(512);

    hash.update(msgpack.encode({ data, meta }) as any);

    const blockHash = hash.digest('hex');

    console.log({
      data,
      meta,
      blockHash,
    })

    MessageApi.sendMessage({
      data,
      meta,
      blockHash,
    });
  });

export {
  sendMessage,
}