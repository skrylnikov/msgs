import React from 'react';
import { Wrapper, Scroll } from './messageList.style';
import { Message } from './message';

import { createStoreConsumer } from 'effector-react';

import { store } from '../store';

const MessageListStore = createStoreConsumer(store);

interface Props {
}

const MessageList = ({ }: Props) => {

  return (
    <Scroll>
      <Wrapper>
        <MessageListStore>
          {store => store.messageList.map((message) => (
            <Message key={message.text} author={message.author} text={message.text} isMyMessage={message.isMyMessage} />
          ))}
        </MessageListStore>
      </Wrapper>
    </Scroll>
  )
}

export {
  MessageList,
};
