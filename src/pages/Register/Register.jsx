import React from 'react';
import { Formik } from 'formik';
import { Link } from 'react-router-dom'; 
import LoInput from '../../components/UI/LoginInput/LoInput';
import Submit from '../../components/UI/Submit/Submit';
import { Form, LoginContainerStyled, LoginEmailStyled, LoginH1 } from './RegisterStyles';

const Register = () => {
  return (
    <LoginContainerStyled>
      <LoginH1>Crea tu cuenta</LoginH1>
      <Formik>
        <Form>
          <LoInput type='text' placeholder='Nombre' />
          <LoInput type='text' placeholder='Email' />
          <LoInput type='password' placeholder='Password' />
          <Link to='/login'>
            <LoginEmailStyled to='/login'>
              ¿Ya tienes una cuenta? Inicia sesión
            </LoginEmailStyled>
          </Link>
          <Submit type='button' onClick={e => e.preventDefault()}>
            Registrarte
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
