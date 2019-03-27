import React, { useState, useCallback } from 'react';
import { Wrapper, Textarea, Button } from './sendPanel.style';

import { sendMessage } from '../effects';
import { onChangeName } from '../events';

interface Props {
}

const SendPanelComponent = ({ }: Props) => {

  const [text, setText] = useState('');

  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  const onSend = useCallback(() => {
    onChangeName(username);
    sendMessage(text);
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
  SendPanelComponent,
};
