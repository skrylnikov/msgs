import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  min-width: 8rem;
  max-width: 20rem;
  width: max-content;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: border 300ms ease;
  border-radius: 1rem;
  margin: 0.3rem;
    @media (max-width: 600px){
      margin: 0.1rem;
      max-width: 80%;
    }
`;

const Author = styled.p`
  align-self: flex-end;
  padding: 0;
  margin: 0; 
  font-size: 12px; 
`;

const Text = styled.p`
  padding: 0;
  margin: 0;  
`;


export {
  Wrapper,
  Author,
  Text,
}

