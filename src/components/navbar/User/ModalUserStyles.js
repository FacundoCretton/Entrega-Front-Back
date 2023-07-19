import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const boxShadowColor = 'rgba(0, 0, 0, 0.3)';

export const ModalContainerStyled = styled(motion.div)`
  position: absolute;
  background-color: #bdb76b;
  box-shadow: 0 0 20px 10px ${boxShadowColor};
  width: 450px;
  top: calc(100px + 2rem);
  right: 0;
  z-index: 98;
  border-radius: 1rem 0 0 1rem;
  padding: 2rem;
  font-family: 'Arial', sans-serif;
  color: #222;

  & span {
    display: flex;
    margin-top: 10px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #333;

  &:hover {
    opacity: 0.9;
  }
`;

export const UsernameStyled = styled.h2`
  font-size: 24px;
  font-weight: 400;
`;

export const HrStyled = styled.hr`
  margin: 2rem 0;
  border: 0;
  height: 1px;
  background-color: #ccc;
`;

