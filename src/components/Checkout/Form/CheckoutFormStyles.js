import styled from 'styled-components';
import { Formik as FormikContainer, Form as FormikForm } from 'formik';

export const CheckoutDatosStyled = styled.div`
  width: 50%;
  margin: 0 auto;
`;

export const Formik = styled(FormikContainer)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
export const Form = styled(FormikForm)`
  display: flex;
  flex-wrap: wrap;
  background: #6B8E23CC;
  justify-content: center;
  border-radius: 15px;
`;

export const TituloH2 = styled.h2`
  color: black;
  text-align: center;
  margin-bottom: 1rem;



`