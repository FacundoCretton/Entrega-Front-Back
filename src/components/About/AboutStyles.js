import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';



export const AboutContainer = styled.div`
    padding: 0 2rem;
    display: flex;
    gap:2rem;
    margin-top: 4rem;
    max-width: 1200px;

    @media screen and (max-width: 1052px) {
        flex-direction: column;
        gap: 2.3rem;

    
    
    }



`;



export const AboutLeft = styled.div`
  flex: 1 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  grid-auto-rows: minmax(150px, 1fr);
  flex-wrap: wrap;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    aspect-ratio: 1/1; /* Mantener relación de aspecto cuadrada */
  }

  & > :first-child {
    width: 12rem;
    grid-row: 1 / 3;
    height: 28rem;
  }

  & > :nth-child(2) {
    width: 25rem;
    height: 16rem;
    grid-column: 2 / 4;
  }

  & > :nth-child(3) {
    width: 14rem;
    grid-column: 2 / 3;
    grid-row: 2;
    height: 11.2rem;
  }

  & > :nth-child(4) {
    width: 10rem;
    grid-row: 2;
    grid-column: 3 / 4;
    height: 11.2rem;
  }

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);

    & > :first-child {
      width: 7rem;
      height: 20rem;
    }

    & > :nth-child(2) {
      width: 16rem;
      height: 10rem;
    }

    & > :nth-child(3) {
      width: 7rem;
      height: 9rem;
    }

    & > :nth-child(4) {
      width: 7rem;
      height: 9rem;
    }
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);

    & > :first-child {
      width: 100%;
      height: 20rem;
    }

    & > :nth-child(2) {
      width: 100%;
      height: 10rem;
    }

    & > :nth-child(3) {
      width: 100%;
      height: 9rem;
    }

    & > :nth-child(4) {
      width: 100%;
      height: 9rem;
    }
  }
`;


export const Imagen = styled.img`
    object-fit: cover;

`;

export const AboutRight = styled.div`
    flex: 1 1;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    margin:auto;
    @media screen and (max-width: 992px) {

        width: 100%;
        max-width: 430px;
        padding: 0 1rem;
    }
    

    

`;


export const ContenedorSpan = styled.div`
    
    font-size: 12px;
    font-style: italic;
    font-weight: 600;
    max-width: 500px;

`;

export const DetallesRight = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;



`;

export const DetallesText = styled.div`
    display: flex;
    font-size: 13px;
    font-weight: 600;
    gap: 1rem;

`;


export const StyledFaCheck = styled(FaCheck)`

    width: 2rem;
    height: 2rem;
`;

export const AboutSpan = styled.span`
    color: #f9a109;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;


`;


