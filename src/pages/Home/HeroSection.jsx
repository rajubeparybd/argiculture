import styled from "styled-components";
import heroBg from "../../assets/images/hero-bg.jpeg"; // Replace with the actual image path

const HeroSectionContainer = styled.section`
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  margin-bottom: 40px;
`;

const HeroButton = styled.button`
  background-color: #27ae60;
  color: #fff;
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #219150;
  }
`;

function HeroSection() {
  return (
    <HeroSectionContainer>
      <HeroTitle>Your Agricultural Partner</HeroTitle>
      <HeroSubtitle>Empowering Farmers with Technology</HeroSubtitle>
      <HeroButton>Get Started</HeroButton>
    </HeroSectionContainer>
  );
}

export default HeroSection;
