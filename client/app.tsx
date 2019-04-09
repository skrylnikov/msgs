import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import 'babel-polyfill';

import { ChatComponent, SettingComponent } from './features';

import { themeStore } from './features/setting/store';

import * as Theme from './theme';

import { createStoreConsumer } from 'effector-react';

const ThemeStore = createStoreConsumer(themeStore);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 600px){
    flex-direction: column;
    align-items: center;
  } 
`;

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
    background: ${(props) => props.theme.colors.bg};
    color: ${(props) => props.theme.colors.mainText};
  }

  input, 
  textarea,
  button {
    border-color: ${(props) => props.theme.colors.border};
    border-width: 1px;
  }
`;


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

export {
  App,
};

