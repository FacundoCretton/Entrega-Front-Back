import React from "react"
import {Link} from  "react-router-dom"
import {Formik} from "formik"
import Submit from "../../components/UI/Submit/Submit"

import { Form, LoginContainerStyled, LoginH2, NoAccount } from "./LoginStyles"
import LoInput from "../../components/UI/LoginInput/LoInput"



const Login =()=>{
    return(
        <LoginContainerStyled>
            <LoginH2>Login</LoginH2>
            <Formik>
            <Form>
          <LoInput type='text' placeholder='Email' />
          <LoInput type='password' placeholder='Password' />
          <Link to='/forgot-password'>
            <NoAccount>Olvidé la contraseña</NoAccount>
          </Link>
          <Link to='/register'>
            <NoAccount>No tengo cuenta. Registrarme</NoAccount>
          </Link>
          <Submit type='button' onClick={e => e.preventDefault()}>
            Ingresar
          </Submit>
        </Form>
             </Formik>



        </LoginContainerStyled>



    );
}

export default Login;
