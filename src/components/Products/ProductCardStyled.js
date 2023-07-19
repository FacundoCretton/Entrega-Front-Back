import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
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
  flex-direction: column;
  align-items: center;
  width: 300px;
  gap: 20px;
  margin-top: 20px;
  background-color: #bdb76b;
  border-radius: 15px;
  border: 3px solid #cdb79e;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

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
    text-align: center;
  }

  .product-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    width: 100%;
  }

  .description-container {
    width: 100%;
    cursor: pointer;
  }

  .description-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: ${props => (props.isOpen ? "500px" : "0")};
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }

  .description-content p {
    margin: 0;
  }

  Button {
    width: 150px;
    margin: auto;
  }
  .description-label {
    cursor: pointer;
    font-weight: 600;
    text-align: center;
    text-decoration: underline;

    &:hover {
      color: #007bff; 
    }
  }
  .description-text {
    font-style: italic; 
    color: #333; 
    font-size: 1rem; 
    line-height: 1; 
  }
`;
