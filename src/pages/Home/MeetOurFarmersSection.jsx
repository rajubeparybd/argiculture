import React from 'react';
import styled from 'styled-components';
import arfinsirImg from '../../assets/images/arfinsir.jpg';
import milyImg from '../../assets/images/mily.png';
import tarikulImg from '../../assets/images/tarikul.jpg';
import rehanImg from '../../assets/images/rehan.jpg';
import saniImg from '../../assets/images/sani.jpg';
import mahinImg from '../../assets/images/mahin.png';
const TeamSection = styled.section`
  padding: 60px 20px;
  text-align: center;
  background-color: #f9f9f9;
`;

const TeamTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
  color: #333;
`;

const TeamSubtitle = styled.p`
  font-size: 18px;
  color: #777;
  margin-bottom: 40px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns for a 3x2 grid */
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const TeamImageWrapper = styled.div`
  width: 120px;
  height: 160px;
  margin: 20px auto;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const TeamImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const TeamContent = styled.div`
  padding: 20px;
`;

const TeamName = styled.h4`
  font-size: 22px;
  color: #333;
  margin-bottom: 10px;
`;

const TeamRole = styled.p`
  font-size: 16px;
  color: #777;
`;

const teamMembers = [
  {
    name: 'Dr. Md Shamsul Arefin',
    role: 'Project Lead',
    image: arfinsirImg, // Replace with actual image path
  },
  {
    name: 'Md Ibrahim Shikder Mahin',
    role: 'Data Scientist',
    image: mahinImg, // Replace with actual image path
  },
  {
    name: 'Farzana Akter Mily',
    role: 'Ux & UX Designer',
    image: milyImg, // Replace with actual image path
  },
  {
    name: 'Sahadat Hossain Sani',
    role: 'Web Developer (Frontend Focused)',
    image: saniImg, // Replace with actual image path
  },
  {
    name: 'Takiul Islam Sumon',
    role: 'Web Developer (Backend Focused)',
    image: tarikulImg, // Replace with actual image path
  },
  {
    name: 'Moinul Islam Rehan',
    role: 'Research Analyst',
    image: rehanImg, // Replace with actual image path
  },
];

const OurTeamSection = () => {
  return (
    <TeamSection>
      <TeamSubtitle>Team Members</TeamSubtitle>
      <TeamTitle>Meet Our Team</TeamTitle>
      <TeamGrid>
        {teamMembers.map((member, index) => (
          <TeamCard key={index}>
            <TeamImageWrapper>
              <TeamImage src={member.image} alt={member.name} />
            </TeamImageWrapper>
            <TeamContent>
              <TeamName>{member.name}</TeamName>
              <TeamRole>{member.role}</TeamRole>
            </TeamContent>
          </TeamCard>
        ))}
      </TeamGrid>
    </TeamSection>
  );
};

export default OurTeamSection;
