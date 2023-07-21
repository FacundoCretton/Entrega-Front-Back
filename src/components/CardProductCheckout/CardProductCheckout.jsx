import { formatPrice } from '../../utils/formatPrice';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

import Count from '../UI/Count/Count';
import Increase from '../UI/Incrense/Incrense';

import {
  CardContainerStyled,
  CardInfoStyled,
  PriceStyled,
  ProductTitleStyled,
  TextStyled,
  QuantityContainerStyled,
} from './CardProductCheckoutStyles';

import { getImagePath } from '../../utils/imageHelper';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cart/cartSlide';

const CardProductCheckout = ({img, name, price, id, quantity}) => {

  const imagePath = getImagePath(img); 
  const dispatch = useDispatch();

  return (
    <CardContainerStyled>
        <img src={imagePath} alt={name} /> 

      <CardInfoStyled>
        <ProductTitleStyled>{name}</ProductTitleStyled>
        <TextStyled></TextStyled>
        <PriceStyled>{formatPrice(price)}</PriceStyled>
      </CardInfoStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor= "red"
          onClick={()=>dispatch(removeFromCart(id))}
        >
          <FaMinus />
        </Increase>
        <Count>{quantity}</Count>
        <Increase onClick={()=>dispatch(addToCart({img, name, price, id, quantity}))}>
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </CardContainerStyled>
  );
};

export default CardProductCheckout;
