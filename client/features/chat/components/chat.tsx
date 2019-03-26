import React from 'react';
import { Wrapper, Header } from './chat.styled';

import { MessageList } from './messageList';
import { SendPanel } from './sendPanel'

interface Props {
  sendMessage: (text: string, username: string) => void;
}

const Chat = ({ sendMessage }: Props) => {

  return (
    <Wrapper>
      <Header>Chat</Header>
      <MessageList />
      <SendPanel send={sendMessage} />
    </Wrapper>
  )
}

export {
  Chat,
};
