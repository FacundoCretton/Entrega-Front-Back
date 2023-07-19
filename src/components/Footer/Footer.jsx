import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaNewspaper, FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer,
  FooterContent,
  FooterLeftFraction,
  FLFul,
  FLFli,
  FooterRedesSocialesContainer,
  FooterRedSocialIcon,
  FooterLinks,
  FooterLink,
  FooterSeparator,
  FooterCopyRight,
} from './FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLeftFraction>
          <FLFul>
            <FLFli>
              <FaMapMarkerAlt />
              <span>San Martin 12399</span>
            </FLFli>
            <FLFli>
              <FaEnvelope />
              <span>LaDespensadelaAbuela101@gmail.com</span>
            </FLFli>
            <FLFli>
              <FaPhone />
              <span>+54911653476</span>
            </FLFli>
            <FLFli>
              <FaNewspaper />
              <span>Últimas novedades</span>
            </FLFli>
          </FLFul>
        </FooterLeftFraction>

        <FooterRedesSocialesContainer>
        <a href="https://www.facebook.com/"><FooterRedSocialIcon facebook><FaFacebookF /></FooterRedSocialIcon></a>
          <a href="https://www.instagram.com/"><FooterRedSocialIcon instagram><FaInstagram /></FooterRedSocialIcon></a>
          <a href="https://www.youtube.com/"><FooterRedSocialIcon youtube><FaYoutube /></FooterRedSocialIcon></a>
          <a href="https://www.twitter.com/"><FooterRedSocialIcon twitter><FaTwitter /></FooterRedSocialIcon></a>
        </FooterRedesSocialesContainer>
        <FooterLinks>
          <ul>
            <li><FooterLink href="#">Inicio</FooterLink></li>
            <li><FooterLink href="#">Servicios</FooterLink></li>
            <li><FooterLink href="#">Contacto</FooterLink></li>
          </ul>
        </FooterLinks>
      </FooterContent>
      <FooterSeparator />
      <FooterCopyRight>
        <p>© 2023 La Despensa de la Abuela. Todos los derechos reservados.</p>
      </FooterCopyRight>
    </FooterContainer>
  );
};

export default Footer;
