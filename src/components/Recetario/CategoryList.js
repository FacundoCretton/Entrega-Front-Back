import React from 'react';
import { CategoryContainer, CategoryButton } from './CategoryListStyles';

const CategoryList = ({ categories, onCategorySelect }) => {
  return (
    <CategoryContainer>
      {categories.map((category) => (
        <CategoryButton key={category} onClick={() => onCategorySelect(category)}>
          {category}
        </CategoryButton>
      ))}
    </CategoryContainer>
  );
};

export default CategoryList;