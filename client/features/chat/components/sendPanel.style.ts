import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;

  @media (max-width: 600px){
    flex-direction: column;
  } 
`;

const Textarea = styled.textarea`
  width: 80%;
  height: 5rem;
    @media (max-width: 600px){
      width: inherit;
      margin-bottom: 5px;
    } 
`;

const Button = styled.button``;

export {
  Wrapper,
  Textarea,
  Button,
}

