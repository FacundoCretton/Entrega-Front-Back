import { useState } from "react";
import { products } from "../data/products";

export const useProductFilter = (selectedCategory) => {
  const [visibleProductsCount, setVisibleProductsCount] = useState(3);

  const filteredProducts = selectedCategory === "Todos"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  const visibleProducts = filteredProducts.slice(0, visibleProductsCount);

  const handleLoadMore = () => {
    setVisibleProductsCount(prevCount => prevCount + 3);
  };

  const handleLoadLess = () => {
    setVisibleProductsCount(prevCount => Math.max(prevCount - 3, 3));
  };

  return {
    visibleProducts,
    filteredProducts,
    visibleProductsCount,
    handleLoadMore,
    handleLoadLess,
  };
};

