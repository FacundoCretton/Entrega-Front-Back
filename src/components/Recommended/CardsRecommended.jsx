import React from 'react';
import CardRecommended from './CardRecommended';
import { RecommendationContainer, Title } from './CardsRecommendedStyles';
import { useSelector } from 'react-redux';

const CardsRecommended = () => {
  const recommended = useSelector((state) => state.recommended.recommended);

  return (
    <RecommendationContainer>
      <Title>Recomendación de la Abuela</Title>
      {recommended.map((recomendado) => (
        <CardRecommended {...recomendado} key={recomendado.id} />
      ))}
    </RecommendationContainer>
  );
};

export default CardsRecommended;
