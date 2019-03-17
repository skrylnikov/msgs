import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Chat } from './features';


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
      <Chat />
    </section>
  </Wrapper>
);

export {
  App,
};

