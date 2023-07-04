import React from "react";
import { Category, CategoryIcon, CategoryName } from "./StyledCategories";



const CategoryCard = ({ categoria, handleCategoryChange, selectedCategory }) => {


  return (
    <Category
      onClick={() => handleCategoryChange(categoria.category)}
      className={selectedCategory === categoria.category ? "active" : ""}
    >
      <CategoryIcon>
        {categoria.img}
        
      </CategoryIcon>
      <CategoryName>{categoria.name}</CategoryName>
    </Category>
    
  );
};

export default CategoryCard;
