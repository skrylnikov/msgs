import React, { useState, useCallback } from 'react';
import { Wrapper, Textarea, Button } from './sendPanel.style';

interface Props {
  send: (text: string, username: string) => void;
}

const SendPanel = ({ send }: Props) => {

  const [text, setText] = useState('');

  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  const onSend = useCallback(() => {
    send(text, username);
    setTimeout(() => setText(''), 20);
    localStorage.setItem('username', username);
  }, [text, username]);

  return (
    <Wrapper>
      <Textarea value={text} onKeyPress={(e) => e.key === 'Enter' && onSend()} onChange={(e) => setText(e.target.value)} />
      <div>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <Button onClick={() => onSend()}>Send</Button>
      </div>
    </Wrapper>
  )
}

export {
  SendPanel,
};
