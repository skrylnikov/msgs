import { h, render } from 'preact'
import { App } from './app'

import 'normalize.css';
import 'babel-polyfill';
import './theme';



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
