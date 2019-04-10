import styled from 'styled-components';

const Header = styled.h1`
  padding: 0.3rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.borderMini};
  margin: 0;
  height: 3rem;
  transition: border 300ms ease;
`;

const Wrapper = styled.div`
  margin-top: 0.5rem;
  max-width: 1024px;
  width: 95vw;
  height: 95vh;
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  flex-direction: column;
  transition: border 300ms ease;
`;


export {
  Wrapper,
  Header,
}

