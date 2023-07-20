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
  color: #6b4226;
  margin-bottom: 20px;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 103px;
  padding: 1rem 1.7rem;
  background: var(--gray-bg);
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CardImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 16px;
  object-fit: cover;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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