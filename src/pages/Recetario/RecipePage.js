import React from 'react';
import { RecipeContainer, RecipeTitle, RecipeIngredients, RecipeInstructions } from './RecipePageStyles';
import {recetas} from '../../components/data/recetas'


const RecipePage = ({ id }) => {
    // Encuentra la receta correspondiente al id recibido
    const receta = recetas.find((receta) => receta.id === id);
  
    if (!receta) {
      return <div>Receta no encontrada</div>;
    }
  
    return (
      <RecipeContainer>
        <RecipeTitle>{receta.nombre}</RecipeTitle>
        <h3>Ingredientes:</h3>
        <RecipeIngredients>
          {receta.ingredientes.map((ingrediente, index) => (
            <li key={index}>{ingrediente}</li>
          ))}
        </RecipeIngredients>
        <h3>Instrucciones:</h3>
        <RecipeInstructions>
          {receta.instrucciones.map((paso, index) => (
            <li key={index}>{paso}</li>
          ))}
        </RecipeInstructions>
      </RecipeContainer>
    );
  };
  
  export default RecipePage;
  



