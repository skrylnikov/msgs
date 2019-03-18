import React from 'react';
import { Wrapper, Header } from './chat.styled';

import { MessageList } from './messageList';
import { SendPanel } from './sendPanel'
import console = require('console');

const Chat = () => {

  return (
    <Wrapper>
      <Header>Chat</Header>
      <MessageList />
      <SendPanel send={(text) => console.log(text)} />
    </Wrapper>
  )
}

export {
  Chat,
};
