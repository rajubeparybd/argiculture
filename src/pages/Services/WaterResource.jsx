import styled from 'styled-components';

const WaterResourceContainer = styled.div`
  padding: 80px 50px;
  background-color: #f9f9f9;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #27ae60;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto 40px auto;
`;

const InfoText = styled.p`
  font-size: 16px;
  margin: 20px 0;
`;

function WaterResource() {
  return (
    <WaterResourceContainer>
      <Title>Water Resource Management</Title>
      <Description>
        Access satellite data to monitor water resources around your farm. Make informed decisions about irrigation and water conservation using the latest NASA data.
      </Description>
      <InfoText>Stay tuned for more updates and features.</InfoText>
    </WaterResourceContainer>
  );
}

export default WaterResource;
