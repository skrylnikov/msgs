import React from 'react';
import { Wrapper, Header } from './chat.styled';

import { MessageListComponent } from './messageList';
import { SendPanelComponent } from './sendPanel'

interface Props {
}

const ChatComponent = ({ }: Props) => {

  return (
    <Wrapper>
      <Header>Chat</Header>
      <MessageListComponent />
      <SendPanelComponent />
    </Wrapper>
  )
}

export {
  ChatComponent,
};
