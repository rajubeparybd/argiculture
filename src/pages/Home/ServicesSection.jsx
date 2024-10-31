import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import cropSuggestionImg from "../../assets/images/cropPredhome.png";
import diseaseClassificationImg from "../../assets/images/disease-classification.jpg";
import waterResourceImg from "../../assets/images/water-resource.jpg";
import chatBotImg from "../../assets/images/chatbot.jpg";
import soilQualityTestingImg from "../../assets/images/Soil testing.png"; // Add the correct image path
import marketplaceImg from "../../assets/images/Marketplace.png";
const ServicesSectionContainer = styled.section`
  padding: 80px 50px;
  background-color: #f5f5f5;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
`;

const SectionSubtitle = styled.h3`
  font-size: 18px;
  color: #777;
  margin-bottom: 50px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(Link)`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ServiceContent = styled.div`
  padding: 20px;
`;

const ServiceTitle = styled.h4`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 16px;
  color: #777;
  margin-bottom: 10px;
`;

const ServiceIcon = styled.div`
  font-size: 24px;
  color: #27ae60;
`;

function ServicesSection() {
  return (
    <ServicesSectionContainer>
      <SectionSubtitle>Our Services</SectionSubtitle>
      <SectionTitle>What We Offer</SectionTitle>
      <ServicesGrid>
        <ServiceCard to="/services/water-resource">
          <ServiceImage
            src={waterResourceImg}
            alt="Water Resource Management"
          />
          <ServiceContent>
            <ServiceTitle>Water Resource Management</ServiceTitle>
            <ServiceDescription>
              Stay informed about flood risks in your area with real-time water
              level monitoring.
            </ServiceDescription>
            <ServiceIcon>
              <i className="fas fa-water"></i>
            </ServiceIcon>
          </ServiceContent>
        </ServiceCard>
        <ServiceCard to="/services/soil-quality-testing">
          <ServiceImage
            src={soilQualityTestingImg}
            alt="Soil Quality Testing"
          />
          <ServiceContent>
            <ServiceTitle>Soil Quality Testing</ServiceTitle>
            <ServiceDescription>
              Measure and analyze soil conditions with our NPK sensor, providing
              insights into nitrogen, phosphorus, potassium, pH, temperature,
              and moisture levels. Get tailored crop suggestions based on your
              soil data.
            </ServiceDescription>
            <ServiceIcon>
              <i className="fas fa-leaf"></i>
            </ServiceIcon>
          </ServiceContent>
        </ServiceCard>
        <ServiceCard to="/services/crop-suggestion">
          <ServiceImage src={cropSuggestionImg} alt="Crop Suggestion" />
          <ServiceContent>
            <ServiceTitle>Crop Suggestion</ServiceTitle>
            <ServiceDescription>
              Make informed planting decisions by identifying the most suitable
              crops for your region and season, helping maximize yields and
              minimize risks.
            </ServiceDescription>
            <ServiceIcon>
              <i className="fas fa-seedling"></i>
            </ServiceIcon>
          </ServiceContent>
        </ServiceCard>

        <ServiceCard to="/services/disease-classification">
          <ServiceImage
            src={diseaseClassificationImg}
            alt="Disease Classification"
          />
          <ServiceContent>
            <ServiceTitle>Disease Classification</ServiceTitle>
            <ServiceDescription>
              Provides real-time updates on potential threats and offers
              tailored recommendations for disease prevention and treatment,
              ensuring the health and vitality of your crops.
            </ServiceDescription>
            <ServiceIcon>
              <i className="fas fa-diagnoses"></i>
            </ServiceIcon>
          </ServiceContent>
        </ServiceCard>

        <ServiceCard to="/services/chatbot">
          <ServiceImage src={chatBotImg} alt="ChatBot Assistance" />
          <ServiceContent>
            <ServiceTitle>ChatBot Assistance</ServiceTitle>
            <ServiceDescription>
              Get real-time support and advice through our AI-powered ChatBot.
            </ServiceDescription>
            <ServiceIcon>
              <i className="fas fa-robot"></i>
            </ServiceIcon>
          </ServiceContent>
        </ServiceCard>


        <ServiceCard to="/services/hire">
          <ServiceImage src={chatBotImg} alt="Hire" />
          <ServiceContent>
            <ServiceTitle>Hire</ServiceTitle>
            <ServiceDescription>
              Get real-time support and advice through our AI-powered ChatBot.
            </ServiceDescription>
            <ServiceIcon>
              <i className="fas fa-robot"></i>
            </ServiceIcon>
          </ServiceContent>
        </ServiceCard>
        {/* New Soil Quality Testing Service */}

        <ServiceCard to="/services/marketplace">
          <ServiceImage src={marketplaceImg} alt="Marketplace" />
          <ServiceContent>
            <ServiceTitle>Marketplace</ServiceTitle>
            <ServiceDescription>
              Buy and sell harvested crops directly with other farmers through
              our marketplace.
            </ServiceDescription>
            <ServiceIcon>
              <i className="fas fa-store"></i>
            </ServiceIcon>
          </ServiceContent>
        </ServiceCard>
      </ServicesGrid>
    </ServicesSectionContainer>
  );
}

export default ServicesSection;
