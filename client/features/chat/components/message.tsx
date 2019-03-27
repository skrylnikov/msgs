import React from 'react';
import { Wrapper, Author, Text } from './message.style';

interface Props {
  text: string;
  author?: string;
  isMyMessage: boolean;
}

const MessageComponent = ({ text, isMyMessage, author }: Props) => {

  return (
    <Wrapper style={{ alignSelf: isMyMessage ? 'flex-end' : undefined }}>
      <Author>{author || ''}</Author>
      <Text>{text}</Text>
    </Wrapper>
  )
}

export {
  MessageComponent,
};
