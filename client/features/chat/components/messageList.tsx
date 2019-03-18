import React from 'react';
import { Wrapper, Scroll } from './messageList.style';
import { Message } from './message';
import { Message as IMessage } from '../types';

interface Props {
  messageList: IMessage[];
}

const MessageList = ({ messageList }: Props) => {

  return (
    <Scroll>
      <Wrapper>
        {messageList.map((message) => (
          <Message key={message.text} author={message.author} text={message.text} isMyMessage={message.isMyMessage} />
        ))}
      </Wrapper>
    </Scroll>
  )
}

export {
  MessageList,
};
