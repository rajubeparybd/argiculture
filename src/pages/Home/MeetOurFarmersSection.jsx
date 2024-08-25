import styled from "styled-components";
import farmer1Img from "../../assets/images/farmer1.jpg"; // Replace with the actual image paths
import farmer2Img from "../../assets/images/farmer2.jpg"; // Replace with the actual image paths
import farmer3Img from "../../assets/images/farmer3.jpg"; // Replace with the actual image paths

const MeetOurFarmersContainer = styled.section`
  padding: 80px 50px;
  background-color: #f9f9f9;
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

const FarmersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FarmerCard = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const FarmerImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const FarmerContent = styled.div`
  padding: 20px;
`;

const FarmerName = styled.h4`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const FarmerTitle = styled.p`
  font-size: 16px;
  color: #777;
`;

function MeetOurFarmersSection() {
  return (
    <MeetOurFarmersContainer>
      <SectionSubtitle>Team Members</SectionSubtitle>
      <SectionTitle>Meet Our Farmers</SectionTitle>
      <FarmersGrid>
        <FarmerCard>
          <FarmerImage src={farmer1Img} alt="Kevin Smith" />
          <FarmerContent>
            <FarmerName>Kevin Smith</FarmerName>
            <FarmerTitle>Farmer</FarmerTitle>
          </FarmerContent>
        </FarmerCard>
        <FarmerCard>
          <FarmerImage src={farmer2Img} alt="Jessica Brown" />
          <FarmerContent>
            <FarmerName>Jessica Brown</FarmerName>
            <FarmerTitle>Farmer</FarmerTitle>
          </FarmerContent>
        </FarmerCard>
        <FarmerCard>
          <FarmerImage src={farmer3Img} alt="David Martin" />
          <FarmerContent>
            <FarmerName>David Martin</FarmerName>
            <FarmerTitle>Farmer</FarmerTitle>
          </FarmerContent>
        </FarmerCard>
      </FarmersGrid>
    </MeetOurFarmersContainer>
  );
}

export default MeetOurFarmersSection;
