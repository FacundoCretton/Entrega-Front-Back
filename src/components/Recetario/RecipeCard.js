import React from 'react';

const RecipeCard = ({ receta }) => {
  return (
    <div>
      <h2>{receta.nombre}</h2>
      <h3>Ingredientes:</h3>
      <ul>
        {receta.ingredientes.map((ingrediente, index) => (
          <li key={index}>{ingrediente}</li>
        ))}
      </ul>
      <h3>Instrucciones:</h3>
      <ol>
        {receta.instrucciones.map((paso, index) => (
          <li key={index}>{paso}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeCard;
