import React from "react";
import { CategoriesWrapper, CategoriesTitle, CategoryList, Category, CategoryIcon, CategoryName } from "./StyledCategories";
import { categorias } from "../data/categories";
// import {useSelector} from "react-redux"

const Categories = ({ handleCategoryChange, selectedCategory }) => {
    // const categories = useSelector(state => state.categories.categories);
  return (
    <CategoriesWrapper>
      <CategoriesTitle>Categorías</CategoriesTitle>
      <CategoryList>
        {categorias.map((categoria) => (
          <Category
            key={categoria.id}
            onClick={() => handleCategoryChange(categoria.category)}
            className={selectedCategory === categoria.category ? "active" : ""}
          > 
            <CategoryIcon>{categoria.img}</CategoryIcon>
            <CategoryName>{categoria.name}</CategoryName>
          </Category>
        ))}
      </CategoryList>
    </CategoriesWrapper>
  );
};

export default Categories;
