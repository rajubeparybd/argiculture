import styled from 'styled-components';

const CropSuggestionContainer = styled.div`
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

function CropSuggestion() {
  return (
    <CropSuggestionContainer>
      <Title>Crop Suggestion</Title>
      <Description>
        Our Crop Suggestion tool provides personalized recommendations based on the temperature, humidity, and rainfall in your area. Ensure you plant the right crops at the right time!
      </Description>
      <InfoText>Stay tuned for more updates and features.</InfoText>
    </CropSuggestionContainer>
  );
}

export default CropSuggestion;
