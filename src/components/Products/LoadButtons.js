import React from "react";
import { LoadMoreButton, LoadLessButton } from "./ProductButtons";

const LoadButtons = ({ visibleProductsCount, filteredProducts, handleLoadMore, handleLoadLess }) => {
  return (
    <>
      {visibleProductsCount < filteredProducts.length ? (
        <>
          <LoadMoreButton onClick={handleLoadMore} />
          {visibleProductsCount >= 6 && (
            <LoadLessButton onClick={handleLoadLess} />
          )}
        </>
      ) : (
        <LoadLessButton onClick={handleLoadLess} />
      )}
    </>
  );
};

export default LoadButtons;
