import React from "react";
import { CategoriesWrapper, CategoriesTitle, CategoryList } from "./StyledCategories";
import { useSelector, useDispatch } from "react-redux";
import CategoryCard from "./CategoryCard";
import { selectCategory } from "../../redux/categories/categoriesSlice";

const Categories = () => {
  const categories = useSelector(state => state.categories.categories);
  const selectedCategory = useSelector(state => state.categories.selectedCategory);
  const dispatch = useDispatch();

  const handleCategoryChange = (category) => {
    dispatch(selectCategory(category));
  };

  return (
    <CategoriesWrapper>
      <CategoriesTitle>Categorías</CategoriesTitle>
      <CategoryList>
        {categories.map((categoria) => (
          <CategoryCard
            key={categoria.id}
            categoria={categoria}
            handleCategoryChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
        ))}
      </CategoryList>
    </CategoriesWrapper>
  );
};

export default Categories;
