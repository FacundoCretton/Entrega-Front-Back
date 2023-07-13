import { FLFli, FLFul, FooterContainer, FooterLeftFraction } from "./FooterStyles";


const Footer =() =>{
<FooterContainer>
  <FooterLeftFraction>
        <FLFul>
            <FLFli>
                <i class="fas fa-map-marker-alt"></i>
                <span>San Martin 12399</span>
            </FLFli>
            <FLFli>
                <i class="fas fa-envelope"></i>
                <span>NuevoMundo@agencia.com</span>
            </FLFli>
            <FLFli>
                <i class="fas fa-phone"></i>
                <span>+54911653476</span>
            </FLFli>;
            <FLFli>
             <i class="fas fa-newspaper"></i>
                <span>Últimas novedades</span>
            </FLFli>;
        </FLFul>
    </FooterLeftFraction>
  <div class="footer-logo">
    <img src="./Assets/Img/Logo-Actualizado.svg" alt="Logo">
  </div>
  <div class="footer-redes-sociales-container">
    <a href="#"><i class="fa fab fa-facebook-f"></i></a>
    <a href="#"><i class="fa fab fa-instagram"></i></a>
    <a href="#"><i class="fa fab fa-youtube"></i></a>
    <a href="#"><i class="fa fab fa-twitter"></i></a>
  </div>
  <div class="footer-links">
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
  </div>
</FooterContainer>

<div class="footer-copyright">
  <p>© 2023 Nuevo Mundo. Todos los derechos reservados.</p>
</div>
</footer>
}