import React from 'react';
import { Field, ErrorMessage } from 'formik';
import { InputContainerStyled, LoginInputContainer, LoginInputStyled, InputLabelStyled, ErrorMessageStyled } from './LoInputStyles';

const LoInput = ({ name, type, placeholder }) => {
  return (
    <Field name={name}>
      {({ field, form: { errors, touched } }) => (
        <InputContainerStyled>
          <LoginInputContainer>
            <LoginInputStyled
              type={type}
              placeholder={placeholder}
              {...field}
              isError={errors[field.name] && touched[field.name]}
            />
            <InputLabelStyled>{placeholder}</InputLabelStyled>
          </LoginInputContainer>

          <ErrorMessage name={field.name}>
            {message => (
              <ErrorMessageStyled>
                {message}
              </ErrorMessageStyled>
            )}
          </ErrorMessage>
        </InputContainerStyled>
      )}
    </Field>
  );
};

export default LoInput;
