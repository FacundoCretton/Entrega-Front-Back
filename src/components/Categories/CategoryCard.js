import React from "react";
import { Category, CategoryIcon, CategoryName } from "./StyledCategories";



const CategoryCard = ({ categoria:{icon, name, category}, handleCategoryChange, selectedCategory }) => {


  return (
    <Category
      onClick={() => handleCategoryChange(category)}
      className={selectedCategory === category ? "active" : ""}
    >
      <CategoryIcon>
        {icon}
        
      </CategoryIcon>
      <CategoryName>{name}</CategoryName>
    </Category>
    
  );
};

export default CategoryCard;
