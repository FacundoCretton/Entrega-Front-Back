import styled from 'styled-components';

export const RecommendationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #991020; 
  margin-bottom: 20px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.7rem;
  background: #bdb76b;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center; 
  }
`;

export const CardImageWrapper = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 16px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 90px; 
    height: 90px; 
  }
`;

export const CardImg = styled.img`
 
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
`;

export const CardTitle = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  font-weight: 500;
  letter-spacing: 0.05rem;
`;

export const InfoCard = styled.p`
  margin: 0;
  color: #666;
  font-size: 1.2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: auto; 
`;
