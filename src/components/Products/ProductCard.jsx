import React from "react";
import { ProductCardStyled, ImgContainer } from "./ProductCardStyled";
import Button from "../UI/Button/Button";
import { formatPrice } from "../../utils/formatPrice";
import { getImagePath } from "../../utils/imageHelper"; 
import {useDispatch} from "react-redux"
import { addToCart } from "../../redux/cart/cartSlide";

const ProductCard = ({ img, name, description, price, id }) => {
  const imagePath = getImagePath(img); 
  const dispatch = useDispatch()

  return (
    <ProductCardStyled>
      <ImgContainer>
        <img src={imagePath} alt={name} /> 
      </ImgContainer>
      <h3>{name}</h3>
      <div className="product-info">
        {description}
        <p>{formatPrice(price)}</p>
        <Button onClick={()=>dispatch(addToCart({img, name, description, price, id}))} radius={"10"}>Agregar al carro</Button>
      </div>
    </ProductCardStyled>
  );
};

export default ProductCard;
