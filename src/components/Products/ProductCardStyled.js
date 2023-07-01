import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start; /* Alinear elementos en la parte superior */
  justify-content: center;
  gap: 15px;
  padding: 40px 0;
  margin-top: 20px;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  img {
    width: 100%;
    height: auto; 
    max-height: 150px; 
  }
`;

export const ProductCardStyled = styled.div`
  display: flex;
  width: 25%;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
  justify-content: space-between;
  flex-direction: column;
  background-color: #bdb76b;
  border-radius: 15px;
  border: 3px solid #cdb79e;

  h3 {
    font-weight: 600;
    margin: 0;
    text-align: center;
  }

  span {
    font-weight: 600;
  }

  p {
    color: #666;
    font-size: 1.2rem;
  }
`;
