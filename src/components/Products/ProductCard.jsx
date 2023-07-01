import React from "react";
import { ProductCardStyled, ImgContainer } from "./ProductCardStyled";
import Button from "../UI/Button/Button";
import DescriptionToggle from "./DescriptionToggle";
import { formatPrice } from "../../utils/formatPrice";
import { getImagePath } from "../../utils/imageHelper"; 

const ProductCard = ({ img, name, description, price, id }) => {
  const imagePath = getImagePath(img); 

  return (
    <ProductCardStyled>
      <ImgContainer>
        <img src={imagePath} alt={name} /> 
      </ImgContainer>
      <h3>{name}</h3>
      <div className="product-info">
        <DescriptionToggle description={description} />
        <p>{formatPrice(price)}</p>
        <Button radius={"10"}>Agregar al carro</Button>
      </div>
    </ProductCardStyled>
  );
};

export default ProductCard;
