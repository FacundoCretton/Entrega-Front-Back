import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductsContainer } from "./ProductCardStyled";
import ProductCard from "./ProductCard";
import {LoadMoreButton, LoadLessButton, LoadButtonContainer} from "./LoadButtons";
import { handleLoadMore, handleLoadLess } from "./ProductsController";

const AllProductsCards = () => {
  const products = useSelector((state) => state.products.products);
  const selectedCategory = useSelector(
    (state) => state.categories.selectedCategory
  );

  const [visibleProducts, setVisibleProducts] = useState(3);

  let filteredProducts = products;

  if (selectedCategory && selectedCategory !== "Todos") {
    filteredProducts = products.filter(
      (product) => product.category === selectedCategory
    );
  }

  useEffect(() => {
    setVisibleProducts(3); 
  }, [selectedCategory]);
  
  const handleLoadMoreClick = () => {
    handleLoadMore(visibleProducts, setVisibleProducts, filteredProducts.length);
  };

  const handleLoadLessClick = () => {
    handleLoadLess(visibleProducts, setVisibleProducts);
  };

  const visibleProductsData = filteredProducts.slice(0, visibleProducts);

  return (
    <>
      <ProductsContainer>
        {visibleProductsData.map((product) => (
          <ProductCard
            key={product.id}
            img={product.img}
            name={product.name}
            description={product.description}
            price={product.price}
            id={product.id}
          />
        ))}
      </ProductsContainer>
      <LoadButtonContainer>
          {visibleProducts < filteredProducts.length && (
            <LoadMoreButton onClick={handleLoadMoreClick} />
          )}
          {visibleProducts > 3 && (
            <LoadLessButton onClick={handleLoadLessClick} />
          )}
      </LoadButtonContainer>
    </>
  );
};

export default AllProductsCards;
