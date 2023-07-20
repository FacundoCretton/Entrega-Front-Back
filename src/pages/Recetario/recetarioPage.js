import React, { useState } from 'react';
import CategoryList from '../../components/Recetario/CategoryList';
import RecipeCard from '../../components/Recetario/RecipeCard';
import RecipeCardMiniatura from '../../components/Recetario/RecipeCardMiniatura';
import SearchBar from '../../components/Recetario/SearchBar';
import { recetas } from '../../components/data/recetas';
import { RecetarioContainer, Title, CategoryContainer, SearchBarContainer, RecipeCardMiniaturaListContainer, RecipeDetailButton, RecipeDetailContainer } from './recetarioPageStyles';

const RecetarioPage = () => {
  const [currentRecipe, setCurrentRecipe] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showRecipes, setShowRecipes] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
    setSelectedCategory('');
    setCurrentRecipe(null);
    setShowRecipes(!!term);
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
    <RecetarioContainer>
      <Title>Recetario de la Abuela</Title>

      <CategoryContainer>
        <CategoryList categories={getUniqueCategories(recetas)} onCategorySelect={handleCategorySelect} />
      </CategoryContainer>

      <SearchBarContainer>
        <SearchBar onSearch={handleSearch} />
      </SearchBarContainer>

      {currentRecipe ? (
        <RecipeDetailContainer>
        <RecipeDetailButton onClick={() => setCurrentRecipe(null)}>Volver</RecipeDetailButton>
        <RecipeCard receta={currentRecipe} />
      </RecipeDetailContainer>
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
    </RecetarioContainer>
  );
};
const getUniqueCategories = (recetas) => [...new Set(recetas.map((receta) => receta.categoria))];

export default RecetarioPage;



