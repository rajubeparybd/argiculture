import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import aboutImg from '../../assets/images/about-img.jpg';  // Replace with the actual image path

const AboutUsSectionContainer = styled.section`
  padding: 80px 50px;
  background-color: #f5f5f5;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  padding-right: 20px;

  @media (max-width: 768px) {
    padding-right: 0;
    margin-bottom: 20px;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const TextWrapper = styled.div`
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

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
`;

const ListItem = styled.li`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  &::before {
    content: '✔';
    color: #27ae60;
    margin-right: 10px;
  }
`;

const Button = styled.button`
  background-color: #27ae60;
  color: #fff;
  padding: 15px 30px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #219150;
  }
`;

function AboutUsSection() {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/about-us-detail');  // Redirect to the new detailed page
  };

  return (
    <AboutUsSectionContainer>
      <ContentWrapper>
        <ImageWrapper>
          <AboutImage src={aboutImg} alt="About Us" />
        </ImageWrapper>
        <TextWrapper>
          <SmallTitle>Know Us</SmallTitle>
          <Title>Empowering Farmers with Technology</Title>
          <Description>
          We provide data-driven solutions to help farmers optimize their agricultural practices and boost productivity.
          </Description>
          <List>
            <ListItem>Offering innovative tools to enhance modern farming techniques</ListItem>
            <ListItem>Solution for a wide range of resources, from crop management tips to soil health</ListItem>
            <ListItem>Committed to promoting sustainable farming techniques that protect the environment</ListItem>
          </List>
          <Button onClick={handleLearnMoreClick}>Learn More</Button>
        </TextWrapper>
      </ContentWrapper>
    </AboutUsSectionContainer>
  );
}

export default AboutUsSection;
