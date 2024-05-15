import React from 'react';
import { useSelector } from 'react-redux';

const RecipeDetail = ({ id }) => {
  const recetas = useSelector(state => state.recommended.recommended);

  const receta = recetas.find(receta => receta.id === Number(id));

  if (!receta) {
    return <div>Receta no encontrada</div>;
  }

  return (
    <div>
      <h1>{receta.nombre}</h1>
      <img src={receta.imagen} alt={receta.nombre} />
      <p>Categoría: {receta.categoria}</p>
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

export default RecipeDetail;
