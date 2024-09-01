import styled from "styled-components";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import videoBg from "../../assets/images/hero-video.mp4"; // Replace with the actual video path

const HeroSectionContainer = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity here */
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 65px;
  margin-bottom: 20px;
  position: relative;
  z-index: 3;
`;

const HeroSubtitle = styled.p`
  font-size: 30px;
  margin-bottom: 50px;
  position: relative;
  z-index: 3;
`;

const HeroButton = styled.button`
  background-color: #27ae60;
  color: #fff;
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  z-index: 3;

  &:hover {
    background-color: #219150;
  }
`;

function HeroSection() {
  const [text] = useTypewriter({
    words: [
      'Personalized Insights',
      'Real-time Data',
      'Expert Guidance',
      'Tailored Solutions',
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 2000,
  });

  return (
    <HeroSectionContainer>
      <BackgroundVideo autoPlay loop muted>
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </BackgroundVideo>
      <VideoOverlay />
      <HeroTitle>Unlock the Future of Farming</HeroTitle>
      <HeroSubtitle>
        Immerse Yourself in Interactive Tools for <span>{text}</span>
        <Cursor />
      </HeroSubtitle>
      <HeroButton to="/#services">Get Started</HeroButton>
    </HeroSectionContainer>
  );
}

export default HeroSection;