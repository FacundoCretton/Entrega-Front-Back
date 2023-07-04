import React from 'react';
import { IndexContainer, Title, CategoriesContainer, CategoryLink } from './indexPageStyles';
import {recetas} from '../../components/data/recetas'




const renderCategoryLinks = () => {
    const uniqueCategories = [...new Set(recetas.map((receta) => receta.categoria))];
  
    return uniqueCategories.map((categoria) => (
      <CategoryLink key={categoria} href={`#${categoria}`}>
        {categoria}
      </CategoryLink>
    ));
  };
  
  const IndexPage = () => {
    return (
      <IndexContainer>
        <Title>Recetario de la Abuela</Title>
        <CategoriesContainer>{renderCategoryLinks()}</CategoriesContainer>
      </IndexContainer>
    );
  };
  
  export default IndexPage;
