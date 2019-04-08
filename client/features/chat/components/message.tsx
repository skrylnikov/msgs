import React from 'react';
import { Wrapper, Author, Text } from './message.style';

interface Props {
  text: string;
  author?: string;
  isMyMessage: boolean;
  date: string
}

const MessageComponent = ({ text, isMyMessage, author, date }: Props) => {

  return (
    <Wrapper style={{ alignSelf: isMyMessage ? 'flex-end' : undefined }}>
      <div>
        <Author>{author || ''}</Author>
        <Author>{date || ''}</Author>
      </div>
      <Text>{text}</Text>
    </Wrapper>
  )
}

export {
  MessageComponent,
};
