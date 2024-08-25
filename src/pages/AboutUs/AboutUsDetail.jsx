import React from 'react';
import styled from 'styled-components';
import heroBg from '../../assets/images/hero-bg.jpeg';  // Replace with the actual background image path
import service1Img from '../../assets/images/farmer1.jpg';  // Replace with the actual image path
import service2Img from '../../assets/images/farmer2.jpg';  // Replace with the actual image path
import service3Img from '../../assets/images/farmer3.jpg';  // Replace with the actual image path
import detailImg from '../../assets/images/about-detail-img.jpeg';  // Replace with the actual image path

const HeroSection = styled.section`
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  position: relative;
`;

const HeroTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
`;

const HeroSubtitle = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`;

const VideoButton = styled.button`
  background-color: transparent;
  border: none;
  color: #ffc107;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #ffb000;
  }
`;

const ServicesSection = styled.section`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 50px 0;
  background-color: #f9f9f9;
`;

const ServiceCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ServiceTitle = styled.h4`
  font-size: 18px;
  margin: 15px 0;
`;

const DetailSection = styled.section`
  padding: 80px 50px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DetailImageWrapper = styled.div`
  flex: 1;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const DetailImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const DetailContentWrapper = styled.div`
  flex: 1;
  padding-left: 20px;

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const SmallTitle = styled.h3`
  color: #ffc107;  /* Gold color for the small title */
  font-size: 18px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #777;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const IconSection = styled.div`
  display: flex;
  gap: 20px;
`;

const IconCard = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

const IconTitle = styled.h4`
  font-size: 18px;
  margin-top: 10px;
`;

const Icon = styled.div`
  font-size: 36px;
  color: #27ae60;
`;

function AboutUsDetail() {
  return (
    <>
      <HeroSection>
        <HeroTitle>Agriculture Matters to the Future of Development</HeroTitle>
        <HeroSubtitle>Watch our video</HeroSubtitle>
        <VideoButton>
          <i className="fas fa-play-circle"></i> {/* Font Awesome play icon */}
        </VideoButton>
      </HeroSection>

      <ServicesSection>
        <ServiceCard>
          <ServiceImage src={service1Img} alt="Quality Standards" />
          <ServiceTitle>Quality Standards</ServiceTitle>
        </ServiceCard>
        <ServiceCard>
          <ServiceImage src={service2Img} alt="Organic Farming" />
          <ServiceTitle>Organic Farming</ServiceTitle>
        </ServiceCard>
        <ServiceCard>
          <ServiceImage src={service3Img} alt="Agriculture Products" />
          <ServiceTitle>Agriculture Products</ServiceTitle>
        </ServiceCard>
      </ServicesSection>

      <DetailSection>
        <DetailImageWrapper>
          <DetailImage src={detailImg} alt="Healthy Food" />
        </DetailImageWrapper>
        <DetailContentWrapper>
          <SmallTitle>What We Do</SmallTitle>
          <Title>Healthy Food for Good Growth</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nulla pellentesque, venenatis sem non, luctus lacus auctor.
          </Description>
          <IconSection>
            <IconCard>
              <Icon><i className="fas fa-tractor"></i></Icon> {/* Font Awesome icon */}
              <IconTitle>Harvesting</IconTitle>
            </IconCard>
            <IconCard>
              <Icon><i className="fas fa-tools"></i></Icon> {/* Font Awesome icon */}
              <IconTitle>Maintenance</IconTitle>
            </IconCard>
            <IconCard>
              <Icon><i className="fas fa-warehouse"></i></Icon> {/* Font Awesome icon */}
              <IconTitle>Fencing</IconTitle>
            </IconCard>
          </IconSection>
        </DetailContentWrapper>
      </DetailSection>
    </>
  );
}

export default AboutUsDetail;
