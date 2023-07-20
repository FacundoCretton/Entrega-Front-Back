import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f9f2ea; /* Color de fondo vintage */
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #6b4226; /* Color de título marrón */
`;

// Estilos adicionales para los cuadros de categorías
export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

export const CategoryLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 150px;
  margin: 10px;
  background-color: #e0c4ac; /* Color de fondo de cuadro de categoría */
  border-radius: 8px;
  color: #6b4226; /* Color de texto marrón */
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Sombra suave */
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #f9f2ea; /* Color de fondo al pasar el mouse */
  }
`;
