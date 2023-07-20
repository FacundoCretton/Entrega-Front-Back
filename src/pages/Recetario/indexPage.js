import React from 'react';
import CategoryList from '../../components/Recetario/CategoryList';
import { recetas } from '../../components/data/recetas';
import { CategoriesContainer, Container, Title } from './indexPageStyles';

// Definir la función getUniqueCategories aquí
const getUniqueCategories = (recetas) => [...new Set(recetas.map((receta) => receta.categoria))];

const IndexPage = () => {
  const categories = getUniqueCategories(recetas);

  return (
    <Container>
      <Title>Recetario de la Abuela</Title>
      <CategoriesContainer>
        {/* No es necesario pasar handleCategorySelect */}
        <CategoryList categories={categories} />
      </CategoriesContainer>
    </Container>
  );
};

export default IndexPage;
