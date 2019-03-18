import React, { useState, useCallback } from 'react';
import { Wrapper, Textarea, Button } from './sendPanel.style';

interface Props {
  send: (text: string) => void;
}

const SendPanel = ({ send }: Props) => {

  const [text, setText] = useState('');

  const onSend = useCallback(() => {
    send(text);
    setTimeout(() => setText(''), 20);
  }, [text]);

  return (
    <Wrapper>
      <Textarea value={text} onKeyPress={(e) => e.key === 'Enter' && onSend()} onChange={(e) => setText(e.target.value)} />
      <Button onClick={() => onSend()}>Send</Button>
    </Wrapper>
  )
}

export {
  SendPanel,
};
