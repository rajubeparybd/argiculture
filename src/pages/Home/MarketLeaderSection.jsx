import styled from 'styled-components';

const MarketLeaderContainer = styled.section`
  background-color: #27ae60;
  color: white;
  padding: 60px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
`;

const ButtonWrapper = styled.div`
  flex: 1;
  text-align: right;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 20px;
  }
`;

const Button = styled.button`
  background-color: #ffc107;
  color: #333;
  padding: 15px 30px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ffb000;
  }
`;

function MarketLeaderSection() {
  return (
    <MarketLeaderContainer>
      <TextWrapper>
        <Title>Agriculture Market Leaders</Title>
        <Subtitle>We’re popular in agriculture market globally</Subtitle>
      </TextWrapper>
      <ButtonWrapper>
        <Button>Discover More</Button>
      </ButtonWrapper>
    </MarketLeaderContainer>
  );
}

export default MarketLeaderSection;
