import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import Submit from '../../components/UI/Submit/Submit';
import { Form, LoginContainerStyled, LoginH2, NoAccount } from './LoginStyles';
import LoInput from '../../components/UI/LoginInput/LoInput';
import { loginInitialValues } from '../../Formik/initialValues';
import { loginValidationSchema } from '../../Formik/validationSchema';
import { loginUser } from '../../Axios/Axios-user';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../redux/user/userSlice';
import useRedirect from '../../components/Hook/UseRedirect';

const Login = () => {
  const dispatch = useDispatch();
  useRedirect('/');

  return (
    <LoginContainerStyled className="login-page">
      <LoginH2>Login</LoginH2>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={loginValidationSchema}
        onSubmit={async (values) => {
          try {
            const response = await loginUser(values.email, values.password);

            if (response && response.user && response.user.name) {
              const { user, token } = response;
              dispatch(setCurrentUser({ ...user, token }));
            }
          } catch (error) {
            console.error(error);
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <Form>
            <LoInput
              name="email"
              type="text"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <LoInput
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Link to="/forgot-password">
              <NoAccount>Olvidé la contraseña</NoAccount>
            </Link>
            <Link to="/register">
              <NoAccount>No tengo cuenta. Registrarme</NoAccount>
            </Link>
            <Submit type="button" onClick={handleSubmit}>
              Ingresar
            </Submit>
          </Form>
        )}
      </Formik>
    </LoginContainerStyled>
  );
};

export default Login;
