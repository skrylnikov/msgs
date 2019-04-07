import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
    @media (max-width: 600px){
      padding: 0 0.5rem;
    }
`;

const Scroll = styled.div`
  height: 75%;
  overflow: auto;
`;


export {
  Wrapper,
  Scroll,
}

