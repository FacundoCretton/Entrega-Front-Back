import React from 'react'
import { ButtonStyled } from './ButtonStyled'

const Button = ({ radius, disabled = false, children, ...rest }) => {
  return (
    <ButtonStyled
      disabled={disabled}
      radius={radius}
      {...rest}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button