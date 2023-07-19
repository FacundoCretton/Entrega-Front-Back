import styled from 'styled-components';

export const ContactSection = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-around;
  color: white;
  flex-wrap: wrap;
  gap: 50px;
  scroll-margin-top: 115px;
  background-image: url("https://cdn.wallpapersafari.com/84/1/nNvX3f.jpg");
  background-size: 50% 80%;
  background-repeat: no-repeat;
  background-position: left;
  margin-top: 100px;
  padding: 20px;
  height: auto;
  @media (max-width: 992px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image:none;
  }
`;

export const ContactColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
  text-align: center;
  background-image: url('/ruta/a/tu/imagen.jpg'); /* Ruta de tu imagen */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  & p {
    font-size: 20px;
    color: #6c4938;
    margin-bottom: 40px;
  }

  @media (max-width: 992px) {
    max-width: 300px; /* Ajustamos el ancho máximo en dispositivos móviles */
    margin: 0 auto;
    background-image: none; /* Eliminamos la imagen de fondo cuando se encolumnen */
  }
`;


export const ContactHeading = styled.h2`
  font-size: 40px;
  color: #6c4938;
  margin-bottom: 40px;
`;

export const ContactInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactInfoText = styled.p`
  font-size: 18px;
  color: #6c4938;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ContactFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
  width: 100%;

  @media (max-width: 992px) {
    flex-direction: column; /* Cambiamos la dirección del flex en dispositivos móviles */
    align-items: center;
  }
`;

export const ContactForm = styled.form`
  width: 100%;
  max-width: 400px;

  @media (max-width: 576px) {
    max-width: 300px; /* Reducimos el tamaño del formulario en pantallas pequeñas */
  }
`;

export const FormIntro = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #6c4938;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 18px;
  color: #6c4938;
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #6c4938;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid #6c4938;
  border-radius: 5px;
  resize: none;
  height: 150px;
  margin-bottom: 20px;
`;

export const FormSubmitButton = styled.input.attrs({ type: 'submit', value: 'Enviar mensaje' })`
  background-color: #6c4938;
  color: #f7e6d9;
  padding: 12px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #8b614a;
  }
`;
