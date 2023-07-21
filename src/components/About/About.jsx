import React from 'react';
import { AboutContainer, AboutLeft, AboutRight, AboutSpan, ContenedorSpan, DetallesRight, DetallesText, Imagen, StyledFaCheck } from './AboutStyles';

const About = () => {
  return (
    <AboutContainer id ="about">
      <AboutLeft>
        <Imagen src="/La abuela.jpg" alt="Imagen" />
        <Imagen src="/5.jpg" alt="Imagen" />
        <Imagen src="/Rural1.jpeg" alt="Imagen" />
        <Imagen src="/4.webp" alt="Imagen" />
      </AboutLeft>

      <AboutRight>
        <AboutSpan>Algo sobre nosotros</AboutSpan>
        <ContenedorSpan>
          <span>En La Despensa de la Abuela, te ofrecemos una experiencia única y llena de sabor. Nuestros productos son cuidadosamente seleccionados, elaborados con ingredientes naturales y procesos artesanales que garantizan su calidad y autenticidad. Descubre una amplia variedad de especias exquisitas, licores exclusivos y deliciosas mermeladas caseras que llenarán tu hogar con aromas y sabores únicos. Además, hemos sido galardonados internacionalmente por la excelencia de nuestros productos. Nos enorgullecemos de nuestro compromiso con el cuidado del hogar y el medio ambiente, y nos aseguramos de mantener estrictos estándares de calidad y seguridad en cada paso del proceso. Al elegirnos, te llevas un pedacito de tradición, amor y pasión por la buena cocina. ¡Te esperamos con los brazos abiertos en La Despensa de la Abuela!</span>
        </ContenedorSpan>
        <DetallesRight>
          <DetallesText>
            <StyledFaCheck />
            <span>Productos naturales y artesanales</span>
          </DetallesText>
          <DetallesText>
            <StyledFaCheck />
            <span>Amplia variedad de productos artesanales</span>
          </DetallesText>
          <DetallesText>
            <StyledFaCheck />
            <span>Mermeladas caseras y deliciosas</span>
          </DetallesText>
          <DetallesText>
            <StyledFaCheck />
            <span>Premios internacionales a nuestros productos</span>
          </DetallesText>
          <DetallesText>
            <StyledFaCheck />
            <span>Estrictos estándares de calidad en todos nuestros productos</span>
          </DetallesText>
        </DetallesRight>
      </AboutRight>
    </AboutContainer>
  );
};

export default About;
