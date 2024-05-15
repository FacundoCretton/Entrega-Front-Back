import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form as FormikForm } from 'formik';

export const LoginContainerStyled = styled.div`
  position: relative;
  width: 400px;
  height: auto;
  padding: 2rem;
  background-color: #f2e9e4; 
  border: 2px solid #a9917c;
  border-radius: 20px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); 
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 50px;

  @media (max-width: 450px) {
    width: 320px;
  }
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const LoginEmailStyled = styled(Link)`
  color: #a9917c; 
  cursor: pointer;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #a9917c; 
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
  }

  &:hover {
    color: #c55f5f;
  }
  &:visited{
   color: #a9917c;
  }
`;

export const LoginH1 = styled.h1`
  font-size: 2em;
  color: #2e2e2e; 
  text-align: center;
`;
