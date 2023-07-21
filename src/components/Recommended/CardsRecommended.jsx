import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { pickRandomProducts } from '../../utils/pickRandomProducts';
import CardRecommended from './CardRecommended';
import SurpriseButton from './SurpriseButton';
import { RecommendationContainer, Title } from './CardsRecommendedStyles';

const CardsRecommended = () => {
  const recommended = useSelector((state) => state.recommended.recommended);
  const [currentRecipe, setCurrentRecipe] = useState(recommended[0]);

  const handleSurpriseClick = () => {
    const randomRecipe = pickRandomProducts(1)[0];
    setCurrentRecipe(randomRecipe);
  };

  return (
    <RecommendationContainer>
      <Title>Recomendación de la Abuela</Title>
      <CardRecommended {...currentRecipe} />
      <SurpriseButton onClick={handleSurpriseClick} />
    </RecommendationContainer>
  );
};

export default CardsRecommended;
