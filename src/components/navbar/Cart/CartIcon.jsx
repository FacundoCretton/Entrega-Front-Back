import React from 'react';

import { FaShoppingCart } from 'react-icons/fa';

import { CartStyled } from '../navbarStyles';
import { toggleCartHidden } from '../../../redux/cart/cartSlide';
import { useDispatch } from 'react-redux';

const CartIcon = () => {

  const dispatch = useDispatch();
  return (
    <CartStyled onClick={() => dispatch(toggleCartHidden())}>
      <FaShoppingCart />
      <span>{3}</span>
    </CartStyled>
  );
};

export default CartIcon;