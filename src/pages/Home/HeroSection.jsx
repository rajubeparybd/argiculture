// src/pages/Services/HeroSection.jsx

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import videoBg from '../../assets/images/hero-video.mp4'; // Ensure the path is correct

// Styled Components

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
  background-color: rgba(0, 0, 0, 0.5); /* Adjust opacity as needed */
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 65px;
  margin-bottom: 20px;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 45px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 30px;
  margin-bottom: 50px;
  position: relative;
  z-index: 3;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  span {
    color: #27ae60; /* Highlight the dynamic text */
  }
`;

const HeroButton = styled(Link)` /* Change from button to Link */
  background-color: #27ae60;
  color: #fff;
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  z-index: 3;
  text-decoration: none; /* Remove underline */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #219150;
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 16px;
  }
`;

// HeroSection Component

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
        <Cursor cursorStyle="|" />
      </HeroSubtitle>
      <HeroButton to="/dashboard">Dashboard</HeroButton> {/* Updated navigation path */}
    </HeroSectionContainer>
  );
}

export default HeroSection;
