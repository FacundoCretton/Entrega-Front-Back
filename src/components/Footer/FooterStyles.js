import styled from "styled-components"


export const FooterContainer=  styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 20px;
    align-items: center;
`;


export const FooterLeftFraction = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1;
  grid-row: 2;


`;

export const FLFul = styled.ul `
  margin: 0 0 0 20px;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const FLFli = styled.li `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

