import React from 'react'
import { render } from 'react-dom'
import { App } from './app'
import Msgpack from 'msgpack5';

render(<App />, document.getElementById('root'));

const msqpack = Msgpack();

(async () => {
  const r = await fetch('http://127.0.0.1:4000', {
    method: 'POST',
    body: msqpack.encode({ lol: 7 }) as any,
    headers: [['Content-Type', 'application/octet-stream']]
  });



  const buffer = await r.arrayBuffer();

  const result = msqpack.decode(buffer as any);

  console.log(r);
  console.log(buffer);
  console.log(result);
})()

