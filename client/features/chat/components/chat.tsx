import React from 'react';
import { Wrapper, Header } from './chat.styled';

import { MessageList } from './messageList';
import { SendPanel } from './sendPanel'
import console = require('console');
import { Message } from '../types';

interface Props {
  sendMessage: (text: string) => void;
  messageList: Message[];
}

const Chat = ({ sendMessage, messageList }: Props) => {

  return (
    <Wrapper>
      <Header>Chat</Header>
      <MessageList messageList={messageList} />
      <SendPanel send={sendMessage} />
    </Wrapper>
  )
}

export {
  Chat,
};
