import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import { CartStyled } from '../navbarStyles';

const CartIcon = ({ hiddenCart, setHiddenCart }) => {
  return (
    <CartStyled onClick={() => setHiddenCart(!hiddenCart)}>
      <FaShoppingCart />
      <span>{3}</span>
    </CartStyled>
  );
};

export default CartIcon;