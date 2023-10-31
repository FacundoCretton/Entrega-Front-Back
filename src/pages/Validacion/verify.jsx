import React, { useEffect } from "react";
import { Form, Formik } from "formik";
import { verifyUser } from "../../Axios/Axios-user";
import { verifyInitialValues } from "../../Formik/initialValues";
import { verifyValidationSchema } from "../../Formik/validationSchema";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {setCurrentUser, setVerify } from "../../redux/user/userSlice";
import { FormStyled2, ValidateContainerStyled, ValidateTitleStyled } from "./verifyStyles";
import Submit from "../../components/UI/Submit/Submit";
import LoInput from "../../components/UI/LoginInput/LoInput";

const Verify = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
  
    useEffect(() => {
      if (!currentUser) {
        navigate('/login');
      } else if (currentUser.verified) {
        navigate("/");
      }
    }, [currentUser, navigate]);
  
    // Captura el error y muestra un mensaje de error
    const handleVerifyError = (error) => {
      alert(error.message);
    };
  
    const handleVerifySuccess = () => {
      alert("Usuario verificado");
    };
  
    // Actualiza el estado de `verified`
    const handleVerifySuccessUpdate = () => {
      dispatch({
        type: 'SET_VERIFIED',
        payload: true,
      });
    };
  
    return (
      <ValidateContainerStyled>
        <ValidateTitleStyled>Verificar tu usuario</ValidateTitleStyled>
        <Formik
          initialValues={verifyInitialValues}
          validationSchema={verifyValidationSchema}
          onSubmit={async values => {
            try {
              await verifyUser(currentUser.email, values.code);
              // Si la verificación es exitosa, redirige al usuario a la página de inicio
              dispatch(setVerify());
              navigate("/");
              // Muestra un alert o un modal
              handleVerifySuccess();
              // Actualiza el estado de `verified`
              handleVerifySuccessUpdate();
            } catch (error) {
              // Si la verificación no es exitosa, muestra un mensaje de error
              handleVerifyError(error);
            }
          }}
        >
          <FormStyled2>
            <LoInput
              name="code"
              type="code"
              placeholder="Codigo de verificacion"
            />
            <Submit>Enviar</Submit>
          </FormStyled2>
        </Formik>
      </ValidateContainerStyled>
    );
  };
  
export default Verify;