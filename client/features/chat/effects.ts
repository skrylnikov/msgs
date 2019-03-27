import { createEffect } from 'effector';

import { MessageType } from '../../../types/message';

import { MessageApi } from '../../api';

import { userName } from './store';

const sendMessage = createEffect<string, void, void>('sendMessage')
  .use((text) => {
    MessageApi.sendMessage({
      messageType: MessageType.text,
      text,
      author: userName.getState(),
    });
  });

export {
  sendMessage,
}