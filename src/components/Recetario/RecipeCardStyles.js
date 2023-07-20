import styled from 'styled-components';

export const RecipeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: #e0c4ac;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const RecipeTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 10px;
  color: #6b4226;
`;

export const RecipeSubtitle = styled.p`
  font-size: 16px;
  color: #6b4226;
`;

export const IngredientList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  padding: 0;
`;

export const InstructionList = styled.ol`
  list-style-type: decimal;
  margin-left: 20px;
  padding: 0;
`;
