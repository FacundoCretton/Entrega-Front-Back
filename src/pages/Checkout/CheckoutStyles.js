import styled from 'styled-components';

export const ContainerCheckoutStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 2rem 5rem;


  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 2rem 0;
  }
`;
  

