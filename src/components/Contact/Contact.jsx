import React from 'react';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';
import {
  ContactSection,
  ContactColumn,
  ContactHeading,
  ContactInfoContainer,
  ContactInfoText,
  ContactFormContainer,
  ContactForm,
  FormIntro,
  FormLabel,
  FormInput,
  FormTextarea,
  FormSubmitButton,
} from './ContactStyles';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ContactSection id = "contact">
      <ContactColumn>
        <ContactHeading>Contacto</ContactHeading>
        <ContactInfoContainer>
          <ContactInfoText>
            <FiPhone /> +112965478
          </ContactInfoText>
          <ContactInfoText>
            <FiMail /> Ladespensa@gmail.com
          </ContactInfoText>
          <ContactInfoText>
            <FiMapPin /> Esquel, Chubut
          </ContactInfoText>
        </ContactInfoContainer>
        <p>Bienvenido a La Despensa de la Abuela</p>
        
      </ContactColumn>
      <ContactColumn>
        <ContactFormContainer>
          <ContactForm onSubmit={handleSubmit}>
            <FormIntro>¿Cómo podemos ayudarte?</FormIntro>
            <FormLabel htmlFor="nombre">Nombre:</FormLabel>
            <FormInput type="text" id="nombre" required />
            <FormLabel htmlFor="email">Email:</FormLabel>
            <FormInput type="email" id="email" required />
            <FormLabel htmlFor="mensaje">Mensaje:</FormLabel>
            <FormTextarea id="mensaje" required />
            <FormSubmitButton />
          </ContactForm>
        </ContactFormContainer>
      </ContactColumn>
    </ContactSection>
  );
};

export default Contact;

