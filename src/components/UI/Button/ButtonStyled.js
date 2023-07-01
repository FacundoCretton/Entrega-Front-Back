import styled from "styled-components";


export const ButtonStyled = styled.button`
    background-color: #C0A850;
    border-radius: ${({ radius }) => `${radius || '15'}px`};
    border: none;
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    padding: 1rem 2rem;

    &:hover {
        background-color: #801020;
        
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
        
    }
`;