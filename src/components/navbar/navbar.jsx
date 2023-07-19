import React, { useState } from "react";
import { NavbarContainer, LogoStyle,  NavbarMenuUl, NavbarItem, BarrsMenu, CartStyled, CustomButton } from "./navbarStyles";
import { GiHamburgerMenu } from "react-icons/gi";
import CartIcon from "./Cart/CartIcon";
import ModalCart from "./Cart/ModalCart/ModalCart";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenuHidden } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
import ModalUser from "./User/ModalUser";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    if (currentUser) {
      dispatch(toggleMenuHidden());
    } else {
      navigate("/login");
    }
  };

  return (
    <NavbarContainer>
      <ModalUser />
      <ModalCart />
      <LogoStyle src="/Logo React.png" alt="logo" />
      <NavbarMenuUl isOpen={isMenuOpen}> {/* Agregamos isOpen como prop */}
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
        <NavbarItem onClick={handleLoginClick}>
          <CustomButton isActive={currentUser}>
            {currentUser ? currentUser.nombre : "Iniciar sesión"}
          </CustomButton>
        </NavbarItem>
      </NavbarMenuUl>
      <CartStyled>
        <CartIcon />
      </CartStyled>
      <BarrsMenu onClick={handleMenuClick}>
        <GiHamburgerMenu />
      </BarrsMenu>
    </NavbarContainer>
  );
};

export default Navbar;
