import React from 'react';
import { Formik } from 'formik';
import { Link, useNavigate } from 'react-router-dom'; 
import LoInput from '../../components/UI/LoginInput/LoInput';
import Submit from '../../components/UI/Submit/Submit';
import { Form, LoginContainerStyled, LoginEmailStyled, LoginH1 } from './RegisterStyles';
import { registerInitialValues } from '../../Formik/initialValues';
import { registerValidationSchema } from '../../Formik/validationSchema';
import { createUser } from '../../Axios/Axios-user';

const Register = () => {

  const navigate =useNavigate();
  return (
    <LoginContainerStyled>
      <LoginH1>Crea tu cuenta</LoginH1>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions)=>{
          const user = await createUser (values.name, values.email, values.password);
          actions.resetForm();

          if(user){
            navigate ("/login")

          }
        }}
      
      >
        <Form>
          <LoInput name="name" type='text' placeholder='Nombre' />
          <LoInput name="email" type='text' placeholder='Email' />
          <LoInput name="password" type='password' placeholder='Password' />
          <Link to='/login'>
            <LoginEmailStyled to='/login'>
              ¿Ya tienes una cuenta? Inicia sesión
            </LoginEmailStyled>
          </Link>
          <Submit type='button'>
            Registrarte
          </Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
