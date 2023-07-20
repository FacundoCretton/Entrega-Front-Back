import React, { useState } from 'react';
import CategoryList from '../../components/Recetario/CategoryList';
import RecipeCard from '../../components/Recetario/RecipeCard';
import SearchBar from '../../components/Recetario/SearchBar';
import { recetas } from '../../components/data/recetas';

const RecetarioPage = () => {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedCategory('');
    setCurrentRecipe(null);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentRecipe(null);
    setSearchTerm('');
  };

  const filterRecipesByCategory = () => {
    if (!selectedCategory) {
      return recetas;
    }

    return recetas.filter((receta) => receta.categoria === selectedCategory);
  };

  const filterRecipesBySearchTerm = () => {
    if (!searchTerm) {
      return recetas;
    }

    return recetas.filter((receta) =>
      receta.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const handleRecipeSelect = (recipe) => {
    setCurrentRecipe(recipe);
  };

  return (
    <div>
      <h1>Recetario de la Abuela</h1>
      <CategoryList categories={getUniqueCategories(recetas)} onCategorySelect={handleCategorySelect} />
      <SearchBar onSearch={handleSearch} />
      {currentRecipe ? (
        <div>
          <button onClick={() => { setCurrentRecipe(null); setSelectedCategory(''); }}>
            Volver
          </button>
      <RecipeCard receta={currentRecipe} />
    </div>
) : (
        <div>
          {selectedCategory
            ? filterRecipesByCategory().map((receta) => (
                <div key={receta.id} onClick={() => handleRecipeSelect(receta)}>
                  <h3>{receta.nombre}</h3>
                  <p>{receta.descripcion}</p>
                </div>
              ))
            : filterRecipesBySearchTerm().map((receta) => (
                <div key={receta.id} onClick={() => handleRecipeSelect(receta)}>
                  <h3>{receta.nombre}</h3>
                  <p>{receta.descripcion}</p>
                </div>
              ))}
        </div>
      )}
    </div>
  );
};

const getUniqueCategories = (recetas) => [...new Set(recetas.map((receta) => receta.categoria))];

export default RecetarioPage;
