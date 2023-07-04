import React from "react";
import Button from "../UI/Button/Button";
import { styled } from "styled-components";

export const LoadMoreButton = ({ onClick }) => {
  return <Button onClick={onClick}>Ver más</Button>;
};

export const LoadLessButton = ({ onClick }) => {
  return <Button onClick={onClick}>Ver menos</Button>;
};


export const LoadButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 20px
  
 
`;

