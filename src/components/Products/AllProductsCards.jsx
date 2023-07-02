import React, { useState } from "react";
import Categories from "../Categories/Categories";
import { ProductsContainer } from "./ProductCardStyled"; 
import ProductCard from "./ProductCard";
import { useProductFilter } from "./ProductFilter";
import LoadButtons from "./LoadButtons";

const AllProductsCards = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const {
    visibleProducts,
    filteredProducts,
    visibleProductsCount,
    handleLoadMore,
    handleLoadLess,
  } = useProductFilter(selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <Categories
        handleCategoryChange={handleCategoryChange}
        selectedCategory={selectedCategory}
      />

      <ProductsContainer> 
        {visibleProducts.map((product) => (
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

      <LoadButtons
        visibleProductsCount={visibleProductsCount}
        filteredProducts={filteredProducts}
        handleLoadMore={handleLoadMore}
        handleLoadLess={handleLoadLess}
      />
    </>
  );
};

export default AllProductsCards;
