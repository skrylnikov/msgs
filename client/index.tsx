import React from 'react'
import { render } from 'react-dom'
import { App } from './app'

import 'normalize.css';

import { echo } from './api';

render(<App />, document.getElementById('root'));


(async () => {
  const result = await echo({
    test: [7, 3, 5],
    hello: 'world',
  });

  console.log(result);

})()
