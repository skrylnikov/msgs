import React from 'react';
import { Provider } from 'react-redux';
import styled, { createGlobalStyle } from 'styled-components';


import { ChatContainer } from './features/chat/components/chat.container';

import { store } from './features/store';

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
  <Provider store={store}>
    <Wrapper>
      <GlobalStyle />
      <section>
        <ChatContainer />
      </section>
    </Wrapper>
  </Provider>
);

export {
  App,
};

