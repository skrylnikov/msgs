import React from 'react';
import { Wrapper, Scroll } from './messageList.style';
import { MessageComponent } from './message';

import { createStoreConsumer } from 'effector-react';

import { store } from '../store';

const MessageListStore = createStoreConsumer(store);

interface Props {
}

const MessageListComponent = ({ }: Props) => {

  return (
    <Scroll>
      <Wrapper>
        <MessageListStore>
          {store => store.messageList.map((message) => (
            <MessageComponent key={message.blockHash} author={message.author} text={message.text} isMyMessage={message.isMyMessage} />
          ))}
        </MessageListStore>
      </Wrapper>
    </Scroll>
  )
}

export {
  MessageListComponent,
};
