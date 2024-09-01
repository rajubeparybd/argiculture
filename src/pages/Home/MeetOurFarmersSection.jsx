import React from 'react';
import styled from 'styled-components';

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
    role: 'Lead Agronomist',
    image: 'src/assets/images/arfinsir.jpg', // Replace with actual image path
  },
  {
    name: 'Md Ibrahim Shikder Mahin',
    role: 'Field Manager',
    image: 'https://via.placeholder.com/400x300', // Replace with actual image path
  },
  {
    name: 'Farzana Akter Mily',
    role: 'Irrigation Specialist',
    image: 'src/assets/images/mily.png', // Replace with actual image path
  },
  {
    name: 'Sahadat Hossain Sani',
    role: 'Soil Scientist',
    image: 'https://via.placeholder.com/400x300', // Replace with actual image path
  },
  {
    name: 'Takiul Islam Sumon',
    role: 'Crop Advisor',
    image: 'src/assets/images/tarikul.jpg', // Replace with actual image path
  },
  {
    name: 'Moinul Islam Rehan',
    role: 'Research Analyst',
    image: 'src/assets/images/rehan.jpg', // Replace with actual image path
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
