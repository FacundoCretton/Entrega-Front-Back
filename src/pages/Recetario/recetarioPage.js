import React, { useState } from 'react';
import IndexPage from './indexPage';
import RecipePage from './RecipePage';
import SearchBar from './SearchBar';
import {recetas} from '../../components/data/recetas';


const RecetarioPage = () => {
  const [currentRecipeId, setCurrentRecipeId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSearch = (searchTerm) => {
    const matchingRecipe = recetas.find((receta) =>
      receta.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (matchingRecipe) {
      setCurrentRecipeId(matchingRecipe.id);
      setSelectedCategory('');
    } else {
      setCurrentRecipeId(null);
      setSelectedCategory('');
    }
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentRecipeId(null); // Resetea el ID de la receta actual al cambiar de categoría
  };

  const filterRecipesByCategory = () => {
    if (!selectedCategory) {
      return recetas;
    }

    return recetas.filter((receta) => receta.categoria === selectedCategory);
  };

  const RecipeCard = ({ receta }) => (
    <div>
      <h3>{receta.nombre}</h3>
      <p>{receta.descripcion}</p>
      {/* Agrega más detalles de la receta si lo deseas */}
    </div>
  );

  const CategoryList = ({ onCategorySelect }) => (
    <div>
      <button onClick={() => onCategorySelect('Entradas')}>Entradas</button>
      <button onClick={() => onCategorySelect('Plato Principal')}>Plato Principal</button>
      <button onClick={() => onCategorySelect('Postre')}>Postre</button>
      {/* Agrega más botones para otras categorías si lo deseas */}
    </div>
  );

  return (
    <div>
      <IndexPage>
        <CategoryList onCategorySelect={handleCategorySelect} />
      </IndexPage>
      <SearchBar onSearch={handleSearch} />
      {currentRecipeId ? (
        <RecipePage id={currentRecipeId} />
      ) : (
        <div>
          {filterRecipesByCategory().map((receta) => (
            <RecipeCard key={receta.id} receta={receta} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecetarioPage;