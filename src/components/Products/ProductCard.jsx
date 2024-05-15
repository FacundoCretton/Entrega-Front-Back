import React, { useState } from "react";
import { ProductCardStyled, ImgContainer } from "./ProductCardStyled";
import Button from "../UI/Button/Button";
import { formatPrice } from "../../utils/formatPrice";
import { getImagePath } from "../../utils/imageHelper";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartSlide";
import { motion, AnimatePresence } from "framer-motion";

const ProductCard = ({ img, name, description, price, id }) => {
  const imagePath = getImagePath(img);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ProductCardStyled>
      <ImgContainer>
        <img src={imagePath} alt={name} />
      </ImgContainer>
      <h3>{name}</h3>
      <div className="product-info">
        <motion.div onClick={toggleDescription}>
        <span className="description-label">Descripción</span>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p>
                <span className="description-text">{description}</span>
              </p>            
            </motion.div>
          )}
        </AnimatePresence>
        <p>{formatPrice(price)}</p>
        <Button
          onClick={() =>
            dispatch(addToCart({ img, name,  price, id }))
          }
          radius={"10"}
        >
          Agregar al carro
        </Button>
      </div>
    </ProductCardStyled>
  );
};

export default ProductCard;

