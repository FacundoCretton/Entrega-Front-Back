import React from 'react';
import { formatPrice } from '../../utils/formatPrice';

import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
  PriceContainerStyled,
} from './CardResumenStyles';
import { getImagePath } from '../../utils/imageHelper';

const CardResumen = ({name, quantity, img, price}) => {
  const imagePath = getImagePath(img);


  return (
    <ProductStyled>
      <ProductLeftStyled>
      <img src={imagePath} alt={name} />
        <div>
          <h3>{name}</h3>
        </div>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>{quantity}U</p>
        <ProductPriceStyled>{formatPrice(price * quantity)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardResumen;
