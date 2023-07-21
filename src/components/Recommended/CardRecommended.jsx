import React from 'react';
import Button from '../UI/Button/Button';
import { Card, CardImageWrapper, CardImg, CardText, CardTitle, InfoCard } from './CardsRecommendedStyles';
import { useNavigate } from 'react-router-dom';

const CardRecommended = ({ nombre, imagen, categoria, id }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/recetas/${id}`);
  };

  return (
    <Card onClick={handleCardClick}>
      <CardImageWrapper>
        <CardImg src={imagen} alt={nombre} />
      </CardImageWrapper>
      <CardText>
        <CardTitle>{nombre}</CardTitle>
        <InfoCard>{categoria}</InfoCard>
      </CardText>
      <Button>Ver Receta</Button>
    </Card>
  );
};

export default CardRecommended;
