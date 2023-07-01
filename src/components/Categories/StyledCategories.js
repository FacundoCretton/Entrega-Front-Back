import styled from "styled-components";

export const CategoriesWrapper = styled.div`
  padding: 20px;
`;

export const CategoriesTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  color: #333;
  margin-bottom: 10px;
`;

export const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #ff6699;
  }

  &.active {
    color: #ff6699;
  }
`;

export const CategoryIcon = styled.div`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const CategoryName = styled.div`
  font-size: 14px;
  text-align: center;
`;
