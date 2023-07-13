import { NavbarContainer, LogoStyle,NavbarMenu, NavbarMenuUl, NavbarItem, BarrsMenu, CartStyled  } from "./navbarStyles";
import {GiHamburgerMenu} from "react-icons/gi";
import CartIcon from "./Cart/CartIcon";
import ModalCart from "./Cart/ModalCart/ModalCart";



const Navbar = () => {

    return (
        <NavbarContainer>
            <ModalCart  />
            
                <LogoStyle src="/Logo React.png" alt="logo" />
            
           
            <NavbarMenu>

                <NavbarMenuUl>
                    <NavbarItem>
                        <a href="/">Home</a>
                    </NavbarItem>
                    <NavbarItem>
                        <a href="/">Productos</a>
                    </NavbarItem>
                    <NavbarItem>
                        <a href="/">Conocenos</a>
                    </NavbarItem>
                    <NavbarItem>
                        <a href="/">Contactanos</a>
                    </NavbarItem>
                    <NavbarItem>
                        <a href="/">Iniciar Sesion</a>
                    </NavbarItem>


                </NavbarMenuUl>

                <CartStyled>
                <CartIcon />
                </CartStyled>

                <BarrsMenu> <GiHamburgerMenu/> </BarrsMenu>

            </NavbarMenu>
        </NavbarContainer>
    );



};



export default Navbar;