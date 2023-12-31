import * as Yup from 'yup';
import { regEmail } from '../utils/regExp';

export const checkoutValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  cellphone: Yup.string().required('Campo requerido'),
  location: Yup.string().required('Campo requerido'),
  address: Yup.string().required('Campo requerido'),
});

export const registerValidationSchema = Yup.object({
  name: Yup.string().required('Campo requerido'),
  email: Yup.string()
    .matches(regEmail, 'Mail no válido')
    .required('Campo requerido'),
  password: Yup.string()
    .min(8, 'Mínimo de 8 caracteres')
    .max(24, 'Máximo 24 caracteres')
    .required('Campo requerido'),
});

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(regEmail, 'Mail no válido')
    .required('Campo requerido'),
  password: Yup.string()
    .min(8, 'Mínimo de 8 caracteres')
    .max(24, 'Máximo 24 caracteres')
    .required('Campo requerido'),
});

export const verifyValidationSchema = Yup.object({
  code: Yup.string()
    .min(10, 'Mínimo de 10 caracteres')
    .max(10, 'Máximo 10 caracteres')
    .required('Campo requerido'),


});
