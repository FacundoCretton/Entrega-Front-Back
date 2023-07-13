import React from 'react';
import { formatPrice } from '../../../../utils/formatPrice';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

import Count from '../../../UI/Count/Count';
import Increase from '../../../UI/Incrense/Incrense';

import {
  ProductContainerStyled,
  TextContainerStyled,
  CardTitleStyled,
  TextStyled,
  PriceStyled,
  QuantityContainerStyled,
} from './ModalCartStyles';
import { getImagePath } from '../../../../utils/imageHelper';

const ModalCardCart = ({img, name, price, id, quantity}) => {
  const imagePath = getImagePath(img); 

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
          onClick={e => e.preventDefault()}
        >
          <FaMinus />
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={e => e.preventDefault()}>
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCardCart;