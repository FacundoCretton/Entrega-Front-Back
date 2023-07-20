import React, { useState } from 'react';
import CategoryList from '../../components/Recetario/CategoryList';
import RecipeCard from '../../components/Recetario/RecipeCard';
import RecipeCardMiniatura from '../../components/Recetario/RecipeCardMiniatura'; 
import SearchBar from '../../components/Recetario/SearchBar';
import { recetas } from '../../components/data/recetas';
import { RecipeCardMiniaturaListContainer, RecipeDetailButton } from './recetarioPageStyles';


const RecetarioPage = () => {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showRecipes, setShowRecipes] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedCategory('');
    setCurrentRecipe(null);
    setShowRecipes(false);
  };

  const handleCategorySelect = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory('');
      setShowRecipes(false);
    } else {
      setSelectedCategory(category);
      setShowRecipes(true);
    }
    setCurrentRecipe(null);
  };

  const filterRecipes = () => {
    return recetas.filter(
      (receta) =>
        receta.nombre.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedCategory === '' || receta.categoria === selectedCategory)
    );
  };

  const handleRecipeSelect = (recipe) => {
    setCurrentRecipe(recipe);
  };

  return (
    <div>
      <h1>Recetario de la Abuela</h1>
      <CategoryList
        categories={getUniqueCategories(recetas)}
        onCategorySelect={handleCategorySelect}
      />
      <SearchBar onSearch={handleSearch} />
      {currentRecipe ? (
        <div>
          <RecipeDetailButton onClick={() => setCurrentRecipe(null)}>Volver</RecipeDetailButton>
          <RecipeCard receta={currentRecipe} />
        </div>
      ) : (
        <RecipeCardMiniaturaListContainer>
        {showRecipes &&
          filterRecipes().map((receta) => (
            <RecipeCardMiniatura
              key={receta.id}
              receta={receta}
              onClick={() => handleRecipeSelect(receta)}
            />
          ))}
      </RecipeCardMiniaturaListContainer>
      )}
    </div>
  );
};

const getUniqueCategories = (recetas) => [...new Set(recetas.map((receta) => receta.categoria))];

export default RecetarioPage;



