import styled from 'styled-components';

const DiseaseClassificationContainer = styled.div`
  padding: 80px 50px;
  background-color: #ffffff;
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

function DiseaseClassification() {
  return (
    <DiseaseClassificationContainer>
      <Title>Disease Classification</Title>
      <Description>
        Upload images of your crops, and our AI will classify the diseases and suggest appropriate treatments. Protect your crops from pests and diseases with advanced technology.
      </Description>
      <InfoText>Stay tuned for more updates and features.</InfoText>
    </DiseaseClassificationContainer>
  );
}

export default DiseaseClassification;
