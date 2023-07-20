import styled from 'styled-components';

export const RecipeCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

export const RecipeCard = styled.div`
  width: 200px;
  margin: 10px;
  padding: 20px;
  background-color: #e0c4ac; /* Color de fondo de cuadro de receta */
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); /* Efecto de escala al pasar el mouse */
  }
`;

export const RecipeTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #6b4226; /* Color de texto marrón */
  text-align: center;
`;

export const RecipeDescription = styled.p`
  color: #6b4226; /* Color de texto marrón */
`;
