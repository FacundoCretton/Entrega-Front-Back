import styled from 'styled-components';

export const RecipeCardMiniaturaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
  margin: 10px;
  padding: 10px;
  background-color: #e0c4ac; /* Color de fondo de cuadro de receta miniatura */
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Sombra suave */
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1); /* Efecto de escala al pasar el mouse */
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const RecipeTitle = styled.h3`
  font-size: 18px;
  margin: 10px 0;
  color: #6b4226; /* Color de texto marrón */
`;
