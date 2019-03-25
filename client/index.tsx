import React from 'react'
import { render } from 'react-dom'
import { App } from './app'

import 'normalize.css';

import { http, echo, status } from './api';

render(<App />, document.getElementById('root'));


(async () => {
  const result = await echo({
    test: [7, 3, 5],
    hello: 'world',
  });

  console.log(result);

  /*
  if (http.isError(result)) {
    console.error(result);
    return;
  }

  console.log(result.body);

  const statusResult = await status();

  if (http.isError(statusResult)) {
    console.error(statusResult);
    return;
  }

  console.log(statusResult.body);
  */
})()
