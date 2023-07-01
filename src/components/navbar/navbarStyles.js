import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const NavbarContainer = styled.header`
  background-color: rgba(107, 142, 35, 0.8);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  height:60px ;
  margin: auto;
  font-family: 'Bebas Neue';
  padding: 0 2rem;

`;


export const LogoStyle = styled.img`
  width: 55px;
  height: 55px;
`;

export const NavbarMenu = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavbarMenuUl = styled.ul`
  display: flex;
  margin: auto;
  padding: 0px 20px;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px){
    display: none;
  }
    
  

 
`;

export const NavbarItem = styled.li`

    display: flex;
    margin: auto;
    padding: 0px 20px;
    align-items: center;
    justify-content: center;

  a{
    position: relative;
    color: #fff;
    padding: 10px 15px;
    display: inline-block;
    text-decoration: none;
  }

`;
export const ModalOverlayStyled = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: calc(100vw - 450px);
  height: 100vh;
  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}
`;

export const CartStyled = styled.div`
  position: relative;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  margin: auto;

  span {
    position: absolute;
    top: 0;
    height: 20px;
    width: 20px;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid white;
    color: white;
    background-color: red;
    font-size: 0.9rem;
  }

  .cart-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: 10px;
    z-index: 1;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
    width: 250px; /* Ajusta el ancho según tus necesidades */
  }

  .cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  .cart-items {
    margin-bottom: 10px;
  }

  .cart-actions {
    text-align: right;
  }

  .cart-total {
    font-weight: bold;
  }

  .cart-product {
    margin-bottom: 5px;
  }

  .cart-buttons button {
    margin-left: 5px;
  }
`;

export const BarrsMenu = styled.div`
  display: none;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.5rem;


  @media (max-width: 768px){
    display: block;

  }


`;