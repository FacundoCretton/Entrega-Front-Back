import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CategoryButton = styled.button`
  margin: 5px;
  padding: 10px 15px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  color: #333;

  &:hover {
    background-color: #e0e0e0;
  }
`;
