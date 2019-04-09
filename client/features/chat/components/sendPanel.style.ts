import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: center;

  @media (max-width: 600px){
    flex-direction: column;
  } 
`;

export const Textarea = styled.textarea`
  width: 80%;
  height: 5rem;
    @media (max-width: 600px){
      width: inherit;
      margin-bottom: 5px;
    } 
`;

export const Username = styled.input`
  margin-left: 5px;
  @media (max-width: 600px){
    margin: 0;
  }
`;

export const Button = styled.button`
  margin-left: 5px;
  margin-top: 5px;
    @media (max-width: 600px){
      margin: 0;
      margin-left: 5px;
    }
`;
