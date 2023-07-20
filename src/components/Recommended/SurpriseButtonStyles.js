// SurpriseButtonStyles.js
import styled from 'styled-components';

export const Button = styled.button`
  background-color: #6b4226;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #8c5d3b;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;
