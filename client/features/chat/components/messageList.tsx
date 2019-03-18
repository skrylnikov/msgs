import React from 'react';
import { Wrapper, Scroll } from './messageList.style';
import { Message } from './message';

const MessageList = () => {

  return (
    <Scroll>
      <Wrapper>
        <Message author="Author 1" text="message 1" isMyMessage={false} />
        <Message text="my message 2" isMyMessage={true} />
        <Message author="Author 1" text="message 3" isMyMessage={false} />
        <Message author="Author 2" text="message 4" isMyMessage={false} />
        <Message author="Author 1" text="message 5" isMyMessage={false} />
        <Message author="Author 1" text="message 6" isMyMessage={false} />
        <Message text="my message 7" isMyMessage={true} />
        <Message author="Author 1" text="message 8" isMyMessage={false} />
        <Message author="Author 1" text="message 8" isMyMessage={false} />
        <Message author="Author 1" text="message 8" isMyMessage={false} />
        <Message author="Author 1" text="message 8" isMyMessage={false} />
        <Message author="Author 1" text="message 8" isMyMessage={false} />
        <Message author="Author 1" text="message 8" isMyMessage={false} />
        <Message author="Author 2" text="message 9" isMyMessage={false} />
      </Wrapper>
    </Scroll>
  )
}

export {
  MessageList,
};
