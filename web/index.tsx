import 'normalize.css';
import './style.css';
import 'babel-polyfill';
import { h, render } from 'preact'

import { App } from './app'
import './theme';
import './socket';

function init() {
  const root = document.getElementById('root');
  if (!root) {
    return;
  }

  render(<App />, root);
}
init();

//@ts-ignore
if (module.hot) module.hot.accept('./app', init);

