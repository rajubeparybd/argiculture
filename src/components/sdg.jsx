import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for fade-in animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components for Section
const InitiativesSection = styled.section`
  display: flex;
justify-content: center;
  align-items: flex-start;
  padding: 60px 100px;
  background-color: #ffffff;
  opacity: 0;
  animation: ${fadeIn} 1s forwards;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;

const LeftContent = styled.div`
  max-width: 600px;
  padding-right: 100px;

  @media (max-width: 768px) {
    text-align: center;
    padding-right: 0;
  }
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
  color: #333;
  opacity: 0;
  animation: ${fadeIn} 1.2s forwards;
  animation-delay: 0.3s;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.7;
  margin-bottom: 20px;
  opacity: 0;
  animation: ${fadeIn} 1.4s forwards;
  animation-delay: 0.5s;

  @media (max-width: 768px) {
    text-align: center;
  }

  &:hover {
    color: #333;
    transition: color 0.3s ease;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  opacity: 0;
  animation: ${fadeIn} 1.6s forwards;
  animation-delay: 0.7s;
`;

const LearnMoreButton = styled.a`
  background-color: transparent;
  color: #333;
  padding: 10px 20px;
  border: 1px solid #333;
  border-radius: 5px;
  text-decoration: none;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333;
    color: #fff;
    transform: scale(1.05); /* Add scale effect on hover */
  }

  @media (max-width: 768px) {
    display: inline-block;
    margin: 0 auto;
  }
`;

// Hover animation for SDG Cards
const hoverEffect = keyframes`
  0% {
    transform: scale(1);
    box-shadow: none;
  }
  100% {
    transform: scale(1.05);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const RightContent = styled.div`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const SDGCard = styled.div`
  background-color: ${(props) => props.bgColor || '#fff'};
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  opacity: 0;
  animation: ${fadeIn} 1.8s forwards;
  animation-delay: 0.9s;

  &:hover {
    transform: scale(1.05); /* Slightly enlarge the card on hover */
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* Add a shadow on hover */
  }
`;

const SDGIcon = styled.img`
  width: 64px;
  height: auto;
  margin-right: 20px;
`;

const SDGContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SDGTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`;

const SDGDescription = styled.p`
  font-size: 14px;
  margin: 0;
`;

// Main Component
function SustainableInitiatives() {
  return (
    <InitiativesSection>
      {/* Left Content */}
      <LeftContent>
        <Title>Sustainable Agriculture Initiatives</Title>
        <Text>
          At Agro AI, we are committed to making a meaningful and positive impact on global Sustainable Development Goals (SDGs) in the field of agriculture. Our initiatives align with key SDGs to create a more sustainable and equitable future for farming communities worldwide.
        </Text>
        <Text>
          At Agro AI, we are committed to making a meaningful and positive impact on global Sustainable Development Goals (SDGs) in the field of agriculture. Our initiatives align with key SDGs to create a more sustainable and equitable future for farming communities worldwide.
        </Text>
        <ButtonWrapper>
          <LearnMoreButton href="/impact">Learn More</LearnMoreButton>
        </ButtonWrapper>
      </LeftContent>

      {/* Right Content - SDG Cards */}
      <RightContent>
        <SDGCard bgColor="#E74C3C">
          <SDGIcon src="https://drchashi.com/wp-content/uploads/2024/02/group.png" alt="SDG 1" />
          <SDGContent>
            <SDGTitle>SDG 1</SDGTitle>
            <SDGDescription>No Poverty</SDGDescription>
          </SDGContent>
        </SDGCard>

        <SDGCard bgColor="#F1C40F">
          <SDGIcon src="https://drchashi.com/wp-content/uploads/2024/02/icon-sm-5.png" alt="SDG 2" />
          <SDGContent>
            <SDGTitle>SDG 2</SDGTitle>
            <SDGDescription>Zero Hunger</SDGDescription>
          </SDGContent>
        </SDGCard>

        <SDGCard bgColor="#2ECC71">
          <SDGIcon src="https://drchashi.com/wp-content/uploads/2024/02/icon-sm-3.png" alt="SDG 3" />
          <SDGContent>
            <SDGTitle>SDG 3</SDGTitle>
            <SDGDescription>Good Health & Well Being</SDGDescription>
          </SDGContent>
        </SDGCard>

        <SDGCard bgColor="#27AE60">
          <SDGIcon src="https://drchashi.com/wp-content/uploads/2024/02/icon-sm-4.png" alt="SDG 13" />
          <SDGContent>
            <SDGTitle>SDG 13</SDGTitle>
            <SDGDescription>Climate Action</SDGDescription>
          </SDGContent>
        </SDGCard>
      </RightContent>
    </InitiativesSection>
  );
}

export default SustainableInitiatives;
