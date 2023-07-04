import styled from 'styled-components';


export const IndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CategoryLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 150px;
  margin: 10px;
  background-color: #f2f2f2;
  border-radius: 8px;
  color: #333;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ddd;
  }
`;
