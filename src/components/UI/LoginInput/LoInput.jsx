import React from 'react';
import { InputContainerStyled, LoginInputContainer, LoginInputStyled, InputLabelStyled } from './LoInputStyles';

const LoInput = ({ type, placeholder }) => {
  return (
    <InputContainerStyled>
      <LoginInputContainer>
        <LoginInputStyled type={type} placeholder={placeholder} />
        <InputLabelStyled>{placeholder}</InputLabelStyled>
      </LoginInputContainer>
    </InputContainerStyled>
  );
};

export default LoInput;
