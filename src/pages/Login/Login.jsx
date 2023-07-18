import React from "react"
import {Link} from  "react-router-dom"
import {Formik} from "formik"
import Submit from "../../components/UI/Submit/Submit"

import { Form, LoginContainerStyled, LoginH2, NoAccount } from "./LoginStyles"
import LoInput from "../../components/UI/LoginInput/LoInput"
import { loginInitialValues } from "../../Formik/initialValues"
import { loginValidationSchema } from "../../Formik/validationSchema"
import { loginUser } from "../../Axios/Axios-user"
import {useDispatch} from "react-redux";
import {setCurrentUser} from "../../redux/user/userSlice";
import useRedirect from "../../components/Hook/UseRedirect";




const Login =()=>{

  const dispatch = useDispatch();
    useRedirect ("/")


    return(
      <LoginContainerStyled>
        <LoginH2>Login</LoginH2>
        <Formik
          initialValues={loginInitialValues}
          validationSchema={loginValidationSchema}
          onSubmit={async (values)=>{
            const user = await loginUser(values.email, values.password);

            if (user){
              dispatch(setCurrentUser({
                ...user.usuario,
                token: user.token,
              }))
            }

          }}
        >
          <Form>
            <LoInput name="email" type='text' placeholder='Email' />
            <LoInput name="password" type='password' placeholder='Password' />
            <Link to='/forgot-password'>
              <NoAccount>Olvidé la contraseña</NoAccount>
            </Link>
            <Link to='/register'>
              <NoAccount>No tengo cuenta. Registrarme</NoAccount>
            </Link>
            <Submit type='button'>
            Ingresar
            </Submit>
          </Form>
        </Formik>



      </LoginContainerStyled>



    );
}

export default Login;
