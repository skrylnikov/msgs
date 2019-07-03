import { h } from 'preact';
//import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { css } from 'linaria';
import 'babel-polyfill';


import { styled } from 'linaria/react';

import { Component } from 'react';



/*
import { ChatComponent, SettingComponent } from './features';

import { themeStore } from './features/setting/store';

import * as Theme from './theme';

import { createStoreConsumer } from 'effector-react';
*/
//const ThemeStore = createStoreConsumer(themeStore);
const Test = styled.div`
  color: green;
`;
const Wrapper = css`
  color: red;
  display: flex;
  justify-content: center;

  @media (max-width: 600px){
    flex-direction: column;
    align-items: center;
  } 
`;

/*
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
    background: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.mainText};
    transition: background 300ms ease, color 300ms ease;
  }

  input, 
  textarea,
  button {
    border-color: ${(props) => props.theme.colors.border};
    border-width: 1px;
    transition: border 300ms ease;
  }
`;
*/

/*
const App = () => (
  <ThemeStore>
    {(theme) => (
      <ThemeProvider theme={theme === 'nightTheme' ? Theme.nightTheme : Theme.whiteTheme}>
        <Wrapper>
          <GlobalStyle />
          <section>
            <SettingComponent />
          </section>
          <section>
            <ChatComponent />
          </section>
        </Wrapper>
      </ThemeProvider>
    )}
  </ThemeStore>
);
*/
//<Test>kek</Test>
export const App = () => (<div class={Wrapper}>
  hello
  <Test>world</Test>
</div>)