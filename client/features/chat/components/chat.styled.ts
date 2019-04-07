import styled from 'styled-components';

const Header = styled.h1`
  padding: 0.3rem 1rem;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  margin: 0;
  height: 3rem;
`;

const Wrapper = styled.div`
  margin-top: 0.5rem;
  max-width: 1024px;
  width: 95vw;
  height: 95vh;
  border: 1px solid rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
`;


export {
  Wrapper,
  Header,
}

