// src/components/Marketplace/CropSuggestion.jsx

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

// Import images
import leftSectionImg from "../../assets/images/crop-suggestion-inside.jpg";

// Summer Crops Images
import Bell_pepper from "../../assets/images/crops/summer/Bell_pepper.jpg";
import Carrot from "../../assets/images/crops/summer/Carrot.jpg";
import Wheat from "../../assets/images/crops/summer/Wheat.jpg";
import Watermelon from "../../assets/images/crops/summer/Watermelon.jpg";
import Tomato from "../../assets/images/crops/summer/Tomato.jpg";
import Potato from "../../assets/images/crops/summer/Potato.jpg";
import Green_Bean from "../../assets/images/crops/summer/Green_Bean.jpg";
import Eggplant from "../../assets/images/crops/summer/Eggplant.jpg";
import Cucumber from "../../assets/images/crops/summer/Cucumber.jpg";
import Corn from "../../assets/images/crops/summer/Corn.jpg";

// Rainy Crops Images
import Black_gram from "../../assets/images/crops/rainy/Black_gram.jpg";
import Sugarcane from "../../assets/images/crops/rainy/Sugarcane.jpg";
import Soybeans from "../../assets/images/crops/rainy/Soybeans.jpg";
import Rice from "../../assets/images/crops/rainy/Rice.jpg";
import Pumpkins from "../../assets/images/crops/rainy/Pumpkins.jpg";
import Papaya from "../../assets/images/crops/rainy/Papaya.jpg";
import Mustard from "../../assets/images/crops/rainy/Mustard.jpg";
import Mung_beans from "../../assets/images/crops/rainy/Mung_beans.jpg";
import Jute from "../../assets/images/crops/rainy/Jute.jpg";
import Chana from "../../assets/images/crops/rainy/Chana.jpg";

// Winter Crops Images
import Turnip from "../../assets/images/crops/winter/Turnip.jpg";
import Radish from "../../assets/images/crops/winter/Radish.jpg";
import Leek from "../../assets/images/crops/winter/Leek.jpg";
import Leafy_Lettuce from "../../assets/images/crops/winter/Leafy_Lettuce.jpg";
import Green_Onion from "../../assets/images/crops/winter/Green_Onion.jpg";
import Collard from "../../assets/images/crops/winter/Collard.jpg";
import Cauliflower from "../../assets/images/crops/winter/Cauliflower.jpg";
import Cabbage from "../../assets/images/crops/winter/Cabbage.jpg";
import Broccoli from "../../assets/images/crops/winter/Broccoli.jpg";
import Beet from "../../assets/images/crops/winter/Beet.jpg";

// Create a mapping of crop names to images
const cropImages = {
  Bell_Pepper: Bell_pepper,
  Carrot: Carrot,
  Wheat: Wheat,
  Watermelon: Watermelon,
  Tomato: Tomato,
  Potato: Potato,
  Green_Bean: Green_Bean,
  Eggplant: Eggplant,
  Cucumber: Cucumber,
  Corn: Corn,

  Black_gram: Black_gram,
  Sugarcane: Sugarcane,
  Soybeans: Soybeans,
  Rice: Rice,
  Pumpkin: Pumpkins,
  Papaya: Papaya,
  Mustard: Mustard,
  Mung_beans: Mung_beans,
  Jute: Jute,
  Okra: Chana, // Corrected mapping: Okra mapped to Chana image

  Radish: Radish,
  Turnip: Turnip,
  Leek: Leek,
  Green_Onion: Green_Onion,
  Cauliflower: Cauliflower,
  Cabbage: Cabbage,
  Collard: Collard,
  Broccoli: Broccoli,
  Beet: Beet,
  Leafy_Lettuce: Leafy_Lettuce,
};

// Styled Components

const HeroSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* Adjusted height to account for navbar */
  min-height: calc(100vh - 60px); /* 60px is the navbar height for desktop */
  padding-top: 60px; /* Push content below the navbar */
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    min-height: calc(80vh);
    padding-top: 1px;
  }
`;

const HeroCard = styled.div`
  display: flex;
  width: 90%;
  height: 80vh;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    box-shadow: none;
    border-radius: 0;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  background-image: url(${leftSectionImg});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  color: #fff;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  @media (max-width: 768px) {
    height: 200px;
    padding: 20px;
  }
`;

const LeftContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 15px;
  }
`;

const Description = styled.p`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const DatePickerWrapper = styled.div`
  margin-bottom: 20px;

  .date-picker {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    margin-bottom: 15px;

    .date-picker {
      font-size: 14px;
      padding: 8px;
    }
  }
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

  @media (max-width: 768px) {
    margin-bottom: 15px;
    font-size: 14px;
    padding: 8px 16px;
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

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }
`;

const ModalBackground = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 80%;
  max-width: 800px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    max-width: none;
    border-radius: 5px;
    padding: 15px;
  }
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

  @media (max-width: 768px) {
    top: 5px;
    right: 5px;
    font-size: 20px;
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

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
    margin-top: 15px;
  }
`;

const SuggestionsContainer = styled.div`
  padding: 40px;
  padding-bottom: 80px;

  @media (max-width: 768px) {
    padding: 20px;
    padding-bottom: 60px;
  }
`;

const SuggestionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 30px;
  }
`;

const CropCard = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
    border-radius: 5px;
  }
`;

const CropImage = styled.img`
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    border-radius: 5px;
    margin-bottom: 10px;
  }
`;

const CropName = styled.h4`
  font-size: 18px;
  color: #333;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 8px 0;
  }
`;

// Mock Data Categorized by Season
const mockSuggestions = [
  // Winter Crops (November to February)
  {
    name: "Carrot",
    season: "Winter",
  },
  {
    name: "Turnip",
    season: "Winter",
  },
  {
    name: "Radish",
    season: "Winter",
  },
  {
    name: "Leek",
    season: "Winter",
  },
  {
    name: "Leafy_Lettuce",
    season: "Winter",
  },
  {
    name: "Green_Onion",
    season: "Winter",
  },
  {
    name: "Collard",
    season: "Winter",
  },
  {
    name: "Cauliflower",
    season: "Winter",
  },
  {
    name: "Cabbage",
    season: "Winter",
  },
  {
    name: "Broccoli",
    season: "Winter",
  },
  {
    name: "Beet",
    season: "Winter",
  },

  // Summer Crops (March to June)
  {
    name: "Bell_Pepper",
    season: "Summer",
  },
  {
    name: "Watermelon",
    season: "Summer",
  },
  {
    name: "Tomato",
    season: "Summer",
  },
  {
    name: "Potato",
    season: "Summer",
  },
  {
    name: "Green_Bean",
    season: "Summer",
  },
  {
    name: "Eggplant",
    season: "Summer",
  },
  {
    name: "Cucumber",
    season: "Summer",
  },
  {
    name: "Corn",
    season: "Summer",
  },

  // Rainy Crops (July to October)
  {
    name: "Wheat",
    season: "Rainy",
  },
  {
    name: "Black_gram",
    season: "Rainy",
  },
  {
    name: "Sugarcane",
    season: "Rainy",
  },
  {
    name: "Soybeans",
    season: "Rainy",
  },
  {
    name: "Rice",
    season: "Rainy",
  },
  {
    name: "Pumpkin",
    season: "Rainy",
  },
  {
    name: "Papaya",
    season: "Rainy",
  },
  {
    name: "Mustard",
    season: "Rainy",
  },
  {
    name: "Mung_beans",
    season: "Rainy",
  },
  {
    name: "Jute",
    season: "Rainy",
  },
  {
    name: "Chana",
    season: "Rainy",
  },
  // Add more mock crops as needed
];

// Function to Determine Seasons from Date Range
const getSeasonsFromDateRange = (startDate, endDate) => {
  const seasons = new Set();
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Ensure start <= end
  if (start > end) {
    return seasons; // Empty set
  }

  // Iterate through each month in the date range
  let current = new Date(start.getFullYear(), start.getMonth(), 1);

  while (current <= end) {
    const month = current.getMonth() + 1; // Months are 0-indexed
    let season = "";

    if (month === 11 || month === 12 || month === 1 || month === 2) {
      season = "Winter";
    } else if (month >= 3 && month <= 6) {
      season = "Summer";
    } else if (month >= 7 && month <= 10) {
      season = "Rainy";
    }

    if (season) {
      seasons.add(season);
    }

    // Move to the next month
    current.setMonth(current.getMonth() + 1);
  }

  return Array.from(seasons);
};

// CropSuggestion Component

function CropSuggestion() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const suggestionsRef = useRef(null);

  const handleLocationClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePickClick = () => {
    setIsModalOpen(false);
    // You can add additional logic here to handle the selected location
  };

  const handleGetSuggestions = async () => {
    if (startDate && endDate) {
      if (startDate > endDate) {
        alert("Start date cannot be after end date.");
        return;
      }

      setIsLoading(true);
      setError(null);

      // Determine the seasons based on selected dates
      const selectedSeasons = getSeasonsFromDateRange(startDate, endDate);

      if (selectedSeasons.length === 0) {
        setError("No valid seasons found for the selected dates.");
        setIsLoading(false);
        return;
      }

      // Simulate API call with mock data
      setTimeout(() => {
        // Filter mockSuggestions based on selectedSeasons
        const filteredSuggestions = mockSuggestions.filter((crop) =>
          selectedSeasons.includes(crop.season)
        );

        setSuggestions(filteredSuggestions);
        setIsLoading(false);

        if (suggestionsRef.current) {
          suggestionsRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 1500); // Simulate network delay
    } else {
      alert("Please select both start and end dates.");
    }
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <HeroSection>
        <HeroCard>
          <LeftSection>
            <LeftContent>
              <Title>Crop Suggestion Service</Title>
              <Description>
                Get personalized crop suggestions based on your selected
                location and planting schedule.
              </Description>
            </LeftContent>
          </LeftSection>
          <RightSection>
            <LocationButton onClick={handleLocationClick}>
              Select Location
            </LocationButton>
            <DatePickerWrapper>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="Select Start Date"
                dateFormat="MM/dd/yyyy"
                className="date-picker"
                maxDate={endDate || null}
              />
            </DatePickerWrapper>
            <DatePickerWrapper>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                placeholderText="Select End Date"
                dateFormat="MM/dd/yyyy"
                className="date-picker"
                minDate={startDate || null}
              />
            </DatePickerWrapper>
            <SuggestButton onClick={handleGetSuggestions}>
              {isLoading ? "Fetching..." : "Get Suggestion"}
            </SuggestButton>
          </RightSection>
        </HeroCard>
      </HeroSection>

      <SuggestionsContainer ref={suggestionsRef}>
        {isLoading && <p>Loading suggestions...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!isLoading && !error && suggestions.length === 0 && (
          <p>No crop suggestions available for the selected dates.</p>
        )}
        {suggestions.length > 0 && (
          <div>
            <h2>Recommended Crops:</h2>
            <SuggestionsGrid>
              {suggestions.map((crop, index) => (
                <CropCard key={index}>
                  {crop.name in cropImages && (
                    <CropImage src={cropImages[crop.name]} alt={crop.name} />
                  )}
                  <CropName>{crop.name.replace(/_/g, " ")}</CropName>
                  <p>Season: {crop.season}</p>
                </CropCard>
              ))}
            </SuggestionsGrid>
          </div>
        )}
      </SuggestionsContainer>

      <ModalBackground isOpen={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={handleModalClose} aria-label="Close Modal">
            <FaTimes />
          </CloseButton>
          <h2>Select Location</h2>
          {/* Implement location selection here */}
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
