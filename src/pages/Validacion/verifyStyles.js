import styled from "styled-components";

export const ValidateContainerStyled = styled.div`
  display: flex;
  width: 80%;
  margin: 200px;
  flex-direction: column;
  align-items: center;
  gap: 12px 20px;
  padding: 20px;
  background-color: rgba(107, 142, 35, 0.8);;
  border-radius: 6px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

  border: 1px solid  black;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
export const ValidateTitleStyled = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #554533;

  font-weight: 700;
  margin: 0;
`;

export const LoginInputStyled = styled.input`
  background-color: rgba(107, 142, 35, 0.8);
  padding: 10px;
  border-radius: 6px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  gap: 12px;
`;

export const FormStyled = styled.form`
  gap: 12px;
`;


export const LoginInputStyled2 = styled.input`
    background-color: rgba(107, 142, 35, 0.8);;
    padding: 10px;
    border-radius: 6px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    gap: 12px;
    width: 100%;
    margin-bottom: 20px;

`;

export const FormStyled2= styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px 20px;
    padding: 20px;
    background-color: rgba(107, 142, 35, 0.8);;
    border-radius: 6px;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

    border: 1px solid var(--lines);
    @media (max-width: 768px) {
        width: 90%;
    }
`;


export const TextoCarrito = styled.p`
  font-size: 15px;
  text-align: center;
  color: #554533;
  font-weight: 700;
  margin: 0;
`;