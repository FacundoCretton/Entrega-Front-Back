import React from 'react';
import {
  RecipeCardContainer,
  RecipeImage,
  RecipeTitle,
  RecipeSubtitle,
  IngredientList,
  InstructionList,
} from './RecipeCardStyles';

const RecipeCard = ({ receta }) => {
  return (
    <RecipeCardContainer>
      <RecipeTitle>{receta.nombre}</RecipeTitle>
      <RecipeImage src={receta.imagen} alt={receta.nombre} />

      <RecipeSubtitle>Categoría: {receta.categoria}</RecipeSubtitle>
      <h3>Ingredientes:</h3>
      <IngredientList>
        {receta.ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </IngredientList>
      <h3>Instrucciones:</h3>
      <InstructionList>
        {receta.instrucciones.map((paso, index) => (
          <li key={index}>{paso}</li>
        ))}
      </InstructionList>
    </RecipeCardContainer>
  );
};

export default RecipeCard;
