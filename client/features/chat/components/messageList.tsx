import React, { useRef } from 'react';
import { Wrapper, Scroll } from './messageList.style';
import { MessageComponent } from './message';

import { createStoreConsumer } from 'effector-react';

import { store } from '../store';

const MessageListStore = createStoreConsumer(store);

interface Props {
}

const MessageListComponent = ({ }: Props) => {
  const ref = useRef(null);

  return (
    <Scroll ref={ref}>
      <Wrapper>
        <MessageListStore>
          {store => {
            setTimeout(() => {
              ref.current.scrollTop = ref.current.scrollHeight;
            }, 100)
            return store.messageList.map((message) => (
              <MessageComponent
                key={message.blockHash}
                author={message.author}
                text={message.text}
                isMyMessage={message.isMyMessage}
                date={message.date}
              />
            ))
          }}
        </MessageListStore>
      </Wrapper>
    </Scroll>
  )
}

export {
  MessageListComponent,
};
