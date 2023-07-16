import React from 'react';
import { formatPrice } from '../../../../utils/formatPrice';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

import Count from '../../../UI/Count/Count';
import Increase from '../../../UI/Incrense/Incrense';
import {useDispatch} from "react-redux"

import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  TextStyled,
  PriceStyled,
  QuantityContainerStyled,
} from './ModalCartStyles';
import { getImagePath } from '../../../../utils/imageHelper';
import { addToCart, removeFromCart } from '../../../../redux/cart/cartSlide';

const ModalCardCart = ({img, name, price, id, quantity}) => {


  
  const imagePath = getImagePath(img); 
  const dispatch = useDispatch()

  return (
    <ProductContainerStyled>
        <img src={imagePath} alt={name} /> 

      <TextContainerStyled>
        <CardTitleStyled>{name}</CardTitleStyled>
        <TextStyled></TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor={'red'}
          onClick={()=>dispatch(removeFromCart(id))}
        >
          <FaMinus />
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={()=>dispatch (addToCart({img, name, price, id, quantity}))}>
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCardCart;