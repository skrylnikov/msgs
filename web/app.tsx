import { h } from 'preact';
import { css, cx } from 'linaria';


import { getStyle, themeList, theme } from './theme';
console.log(theme.colorMainText);

import { themeStore } from './features/setting/store';
import { onChangeTheme } from './features/setting/events';

import { useStore } from 'effector-react';


const global = css`
* {
    font-family: 'Open Sans', sans-serif;
    background: ${theme.colorBg};
    color: ${theme.colorMainText};
    transition: background 300ms ease, color 300ms ease;
  }

  input, 
  textarea,
  button {
    border-color: ${theme.colorBorder};
    border-width: 1px;
    transition: border 300ms ease;
  }
`;

const wrapper = css`
  color: ${theme.colorMainText};
  display: flex;
  justify-content: center;

  @media (max-width: 600px){
    flex-direction: column;
    align-items: center;
  } 
`;

export const App = () => {
  const theme = useStore(themeStore);

  const style = getStyle(themeList[theme]);

  return (<div class={cx(global, wrapper)} style={style}>
    hello
    <button onClick={() => onChangeTheme('night')}>click</button>
  </div>)
};
