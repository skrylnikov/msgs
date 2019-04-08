import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import 'babel-polyfill';

import { ChatComponent } from './features/chat';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
  }
`;


const App = () => (
  <Wrapper>
    <GlobalStyle />
    <section>
      <ChatComponent />
    </section>
  </Wrapper>
);

export {
  App,
};

