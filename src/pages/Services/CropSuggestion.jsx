import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa'; // Importing a cross icon from react-icons
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import cropImage1 from '../../assets/images/farmer1.jpg';
import cropImage2 from '../../assets/images/farmer2.jpg';
import cropImage3 from '../../assets/images/farmer3.jpg';

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const HeroCard = styled.div`
  display: flex;
  width: 90%;
  height: 80vh;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const LeftSection = styled.div`
  flex: 1;
  background-image: url('https://via.placeholder.com/600');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  color: #fff;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const LeftContent = styled.div`
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 18px;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  background-color: #f9f9f9;
`;

const DatePickerWrapper = styled.div`
  margin-bottom: 20px;
`;

const LocationButton = styled.button`
  padding: 10px 20px;
  background-color: #27ae60;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e8449;
  }
`;

const SuggestButton = styled.button`
  padding: 10px 20px;
  background-color: #2980b9;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #21618c;
  }
`;

const ModalBackground = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #e74c3c;

  &:hover {
    color: #c0392b;
  }
`;

const PickButton = styled.button`
  padding: 10px 20px;
  background-color: #27ae60;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1e8449;
  }
`;

const SuggestionsContainer = styled.div`
  padding: 40px;
  padding-bottom: 80px; /* Padding for footer space */
`;

const SuggestionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
`;

const CropCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
`;

const CropImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
`;

const CropName = styled.h4`
  font-size: 18px;
  color: #333;
  margin: 10px 0;
`;

function CropSuggestion() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const suggestionsRef = useRef(null);

  const handleLocationClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePickClick = () => {
    setIsModalOpen(false); // Close the modal when "Pick" is clicked
  };

  const handleGetSuggestions = () => {
    setSuggestions([
      { name: 'Crop 1', image: cropImage1 },
      { name: 'Crop 2', image: cropImage2 },
      { name: 'Crop 3', image: cropImage3 },
    ]);
    if (suggestionsRef.current) {
      suggestionsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <HeroSection>
        <HeroCard>
          <LeftSection>
            <LeftContent>
              <Title>Crop Suggestion Service</Title>
              <Description>
                Get personalized crop suggestions based on your selected location and planting schedule.
              </Description>
            </LeftContent>
          </LeftSection>
          <RightSection>
            <LocationButton onClick={handleLocationClick}>Select Location</LocationButton>
            <DatePickerWrapper>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Select Start Date"
                dateFormat="MM/dd/yyyy"
                className="date-picker"
              />
            </DatePickerWrapper>
            <DatePickerWrapper>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="Select End Date"
                dateFormat="MM/dd/yyyy"
                className="date-picker"
              />
            </DatePickerWrapper>
            <SuggestButton onClick={handleGetSuggestions}>Get Suggestion</SuggestButton>
          </RightSection>
        </HeroCard>
      </HeroSection>

      <SuggestionsContainer ref={suggestionsRef}>
        {suggestions.length > 0 && (
          <SuggestionsGrid>
            {suggestions.map((crop, index) => (
              <CropCard key={index}>
                <CropImage src={crop.image} alt={crop.name} />
                <CropName>{crop.name}</CropName>
              </CropCard>
            ))}
          </SuggestionsGrid>
        )}
      </SuggestionsContainer>

      <ModalBackground isOpen={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={handleModalClose}>
            <FaTimes />
          </CloseButton>
          <h2>Select Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48351.20274640604!2d-0.13556838164659784!3d51.50767871089981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3339e45f3d%3A0xd19d91f58c6c1d45!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1614088778474!5m2!1sen!2suk"
            width="100%"
            height="450px"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Maps"
          ></iframe>
          <PickButton onClick={handlePickClick}>Pick</PickButton>
        </ModalContent>
      </ModalBackground>
    </div>
  );
}

export default CropSuggestion;