import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f2ea; 
`;


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
  background-color: #e0c4ac; 
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05); 
  }
`;

export const RecipeTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #6b4226; 
  text-align: center;
`;

export const RecipeDescription = styled.p`
  color: #6b4226; 
`;


export const RecipeDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;



export const RecipeCardMiniaturaListContainer = styled.div`
  display: flex;
  flex-wrap: wrap; 
  justify-content: flex-start;
  margin-bottom: 20px;
  padding: 10px;
`;

export const RecipeDetailButton = styled.button`
  padding: 10px 20px;
  background-color: #e0c4ac; 
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: #6b4226; 
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f9f2ea; 
  }
`;

export const RecetarioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f2ea; /* Color de fondo vintage */
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 30px; /* Agregamos margen inferior para separar del contenido siguiente */
  color: #6b4226; /* Color de título marrón */
`;

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px; /* Agregamos margen inferior para separar de la barra de búsqueda */
`;

export const SearchBarContainer = styled.div`
  margin-bottom: 20px; /* Agregamos margen inferior para separar del contenido siguiente */
`;