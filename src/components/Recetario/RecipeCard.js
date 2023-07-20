import React, { useEffect } from 'react';
import { RecipeCardContainer, RecipeImage, RecipeTitle, RecipeSubtitle, IngredientList, InstructionList } from './RecipeCardStyles';
import {  useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RecipeCard = () => {
  const { id } = useParams();
  const recetas = useSelector(state => state.recommended.recommended);

  const receta = recetas.find(receta => receta.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!receta) {
    return <div>Receta no encontrada</div>;
  }

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
