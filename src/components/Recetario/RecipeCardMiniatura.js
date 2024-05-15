import React from 'react';
import { RecipeCardMiniaturaContainer, RecipeImage, RecipeTitle } from './RecipeCardMiniaturaStyles';

const RecipeCardMiniatura = ({ receta, onClick }) => {
  return (
    <RecipeCardMiniaturaContainer onClick={onClick}>
      <RecipeTitle>{receta.nombre}</RecipeTitle>
      <RecipeImage src={receta.imagen} alt={receta.nombre} />
    </RecipeCardMiniaturaContainer>
  );
};

export default RecipeCardMiniatura;
