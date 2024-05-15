import styled from 'styled-components';

export const InputContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 20px;
`;

export const LoginInputContainer = styled.div`
  position: relative;
`;

export const LoginInputStyled = styled.input`
  width: 300px;
  padding: 1rem 1.5rem;
  font-size: 16px;
  color: #2e2e2e;
  background-color: #f2e9e4; 
  border: 2px solid #a9917c; 
  border-radius: 15px;
  outline: none;
  caret-color: #c55f5f; 
  ::placeholder {
    color: #a9917c; 
    opacity: 0.8;
  }
  &:focus {
    background-color: #f8f3eb; 
  }
`;

export const InputLabelStyled = styled.label`
  position: absolute;
  bottom: 100%;
  left: 10px;
  font-size: 14px;
  color: #a9917c; 
`;

export const ErrorMessageStyled = styled.p`
  margin: 0;
  margin-top: 5px;
  color: #fb103d;
  font-size: 14px;
`;
