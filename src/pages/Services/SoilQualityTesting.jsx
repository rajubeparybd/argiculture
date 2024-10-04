// src/components/SoilQualityTesting.jsx

import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  ResponsiveContainer,
} from 'recharts';
import {
  FaLeaf,
  FaTint,
  FaWater,
  FaAdjust,
  FaSolarPanel,
  FaFlask,
  FaTemperatureHigh,
} from 'react-icons/fa';

// Define a vibrant color palette
const colors = {
  primary: '#4CAF50', // Green
  secondary: '#FF9800', // Orange
  accent: '#2196F3', // Blue
  background: '#F0F4C3', // Light Green
  cardBackground: '#FFFFFF', // White
  textPrimary: '#333333', // Dark Gray
  textSecondary: '#555555', // Medium Gray
};

// Animation for fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const Container = styled.div`
  min-height: 100vh;
  padding: 40px 60px;
  background: linear-gradient(135deg, ${colors.background} 0%, #e0f7fa 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 1s ease-in-out;
  font-family: 'Roboto', sans-serif;

  @media (max-width: 768px) {
    padding: 20px 30px;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${colors.primary};
  margin-bottom: 10px;
  text-shadow: 2px 2px ${colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const IconWrapper = styled.span`
  margin-right: 15px;
  display: flex;
  align-items: center;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  color: ${colors.secondary};
  margin-bottom: 40px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const ChartContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 40px;

  @media (max-width: 1200px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ChartWrapper = styled.div`
  flex: 1 1 45%;
  min-width: 300px;
  height: 400px;

  @media (max-width: 1200px) {
    flex: none;
    width: 100%;
    height: 300px;
  }

  @media (max-width: 600px) {
    height: 250px;
  }
`;

const StyledRadarChart = styled(RadarChart)`
  background-color: ${colors.cardBackground};
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const StyledLineChart = styled(LineChart)`
  background-color: ${colors.cardBackground};
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const StyledBarChart = styled(BarChart)`
  background-color: ${colors.cardBackground};
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const AnalysisContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const ConditionTitle = styled.h2`
  font-size: 28px;
  color: ${colors.secondary};
  margin-bottom: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const ConditionIcon = styled.span`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const ConditionDescription = styled.p`
  font-size: 20px;
  color: ${colors.textSecondary};
  text-align: center;
  max-width: 1000px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
    max-width: 100%;
  }
`;

const CropSuggestionContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-top: 40px;
  background-color: ${colors.cardBackground};
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CropTitle = styled.h2`
  font-size: 28px;
  color: ${colors.secondary};
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 15px;
  }
`;

const CropList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

const CropItem = styled.li`
  background-color: ${colors.primary};
  color: #fff;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 18px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
  display: flex;
  align-items: center;
  cursor: default;

  &:hover {
    transform: translateY(-5px);
    background-color: ${colors.accent};
  }

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 8px 16px;
  }
`;

const SoilHealthTips = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-top: 40px;
  background-color: ${colors.cardBackground};
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 30px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const TipsTitle = styled.h2`
  font-size: 28px;
  color: ${colors.secondary};
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 15px;
  }
`;

const TipsList = styled.ul`
  list-style-type: disc;
  padding-left: 20px;
  font-size: 18px;
  color: ${colors.textPrimary};
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 16px;
    padding-left: 15px;
  }
`;

const ParameterDescriptions = styled.div`
  width: 100%;
  max-width: 1400px;
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ParameterCard = styled.div`
  background-color: ${colors.cardBackground};
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  padding: 20px;
  flex: 1 1 250px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ParameterIcon = styled.div`
  font-size: 40px;
  color: ${colors.accent};
  margin-bottom: 15px;
  display: flex;
  align-items: center;
`;

const ParameterName = styled.h3`
  font-size: 22px;
  color: ${colors.primary};
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ParameterDescription = styled.p`
  font-size: 16px;
  color: ${colors.textSecondary};
  text-align: center;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Sample static sensor data with additional parameters
const sensorData = {
  nitrogen: 25, // in ppm
  phosphorus: 18, // in ppm
  potassium: 12, // in ppm
  pH: 6.8,
  temperature: 22, // in °C
  moisture: 45, // in %
  organicMatter: 5, // in %
  soilTexture: {
    sand: 40, // in %
    silt: 40, // in %
    clay: 20, // in %
  },
  cationExchangeCapacity: 15, // in meq/100g
  electricalConductivity: 2.5, // in dS/m
};

// Sample historical data for LineChart
const historicalData = [
  { timestamp: '2024-09-01', nitrogen: 20, phosphorus: 15, potassium: 10 },
  { timestamp: '2024-09-02', nitrogen: 22, phosphorus: 16, potassium: 11 },
  { timestamp: '2024-09-03', nitrogen: 23, phosphorus: 17, potassium: 12 },
  { timestamp: '2024-09-04', nitrogen: 25, phosphorus: 18, potassium: 12 },
  { timestamp: '2024-09-05', nitrogen: 24, phosphorus: 17, potassium: 11 },
  { timestamp: '2024-09-06', nitrogen: 25, phosphorus: 18, potassium: 12 },
];

// Sample soil texture data for BarChart
const soilTextureData = [
  { name: 'Sand', percentage: sensorData.soilTexture.sand },
  { name: 'Silt', percentage: sensorData.soilTexture.silt },
  { name: 'Clay', percentage: sensorData.soilTexture.clay },
];

function SoilQualityTesting() {
  // Static analysis based on sensorData
  const analyzeSoilCondition = (data) => {
    let condition = '';
    const {
      nitrogen,
      phosphorus,
      potassium,
      pH,
      organicMatter,
      cationExchangeCapacity,
      electricalConductivity,
    } = data;

    // Example analysis (adjust thresholds as needed)
    if (nitrogen < 20) {
      condition += 'Nitrogen levels are low. ';
    } else {
      condition += 'Nitrogen levels are adequate. ';
    }

    if (phosphorus < 15) {
      condition += 'Phosphorus levels are low. ';
    } else {
      condition += 'Phosphorus levels are adequate. ';
    }

    if (potassium < 10) {
      condition += 'Potassium levels are low. ';
    } else {
      condition += 'Potassium levels are adequate. ';
    }

    if (pH < 6.0) {
      condition += 'Soil is acidic. ';
    } else if (pH > 7.5) {
      condition += 'Soil is alkaline. ';
    } else {
      condition += 'Soil pH is neutral. ';
    }

    if (organicMatter < 3) {
      condition += 'Organic matter content is low. ';
    } else {
      condition += 'Organic matter content is good. ';
    }

    if (cationExchangeCapacity < 10) {
      condition += 'Cation Exchange Capacity (CEC) is low. ';
    } else {
      condition += 'Cation Exchange Capacity (CEC) is adequate. ';
    }

    if (electricalConductivity > 2) {
      condition += 'Electrical Conductivity (EC) indicates high salinity. ';
    } else {
      condition += 'Electrical Conductivity (EC) is within normal range. ';
    }

    return condition;
  };

  const suggestCrops = (data) => {
    let crops = [];

    if (
      data.nitrogen >= 20 &&
      data.phosphorus >= 15 &&
      data.potassium >= 10 &&
      data.pH >= 6.0 &&
      data.pH <= 7.5 &&
      data.organicMatter >= 3 &&
      data.cationExchangeCapacity >= 10 &&
      data.electricalConductivity <= 2
    ) {
      crops = ['Wheat', 'Corn', 'Soybean'];
    } else if (data.pH < 6.0) {
      crops = ['Blueberries', 'Potatoes', 'Sweet Potatoes'];
    } else if (data.pH > 7.5) {
      crops = ['Barley', 'Alfalfa', 'Sugar Beet'];
    } else {
      crops = ['Sorghum', 'Millet', 'Cassava'];
    }

    return crops;
  };

  // Perform analysis with static data
  const soilCondition = analyzeSoilCondition(sensorData);
  const suggestedCrops = suggestCrops(sensorData);

  // Prepare data for RadarChart
  const radarData = [
    { subject: 'Nitrogen', A: sensorData.nitrogen, fullMark: 50 },
    { subject: 'Phosphorus', A: sensorData.phosphorus, fullMark: 50 },
    { subject: 'Potassium', A: sensorData.potassium, fullMark: 50 },
    { subject: 'pH', A: sensorData.pH, fullMark: 14 },
    { subject: 'Moisture', A: sensorData.moisture, fullMark: 100 },
    { subject: 'Temperature', A: sensorData.temperature, fullMark: 50 },
    { subject: 'Organic Matter', A: sensorData.organicMatter, fullMark: 10 },
    { subject: 'CEC', A: sensorData.cationExchangeCapacity, fullMark: 20 },
    { subject: 'EC', A: sensorData.electricalConductivity, fullMark: 5 },
  ];

  // Prepare data for LineChart
  const lineChartData = historicalData.map((data) => ({
    ...data,
    nitrogen: data.nitrogen,
    phosphorus: data.phosphorus,
    potassium: data.potassium,
  }));

  return (
    <Container>
      <Title>
        <IconWrapper>
          <FaFlask />
        </IconWrapper>
        Soil Quality Testing
      </Title>
      <Subtitle>Comprehensive Analysis of Your Soil Health</Subtitle>

      <ChartContainer>
        {/* Radar Chart */}
        <ChartWrapper>
          <ResponsiveContainer width="100%" height="100%">
            <StyledRadarChart data={radarData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis angle={30} domain={[0, 50]} />
              <Radar
                name="Current Levels"
                dataKey="A"
                stroke={colors.accent}
                fill={colors.accent}
                fillOpacity={0.6}
              />
              <Legend />
            </StyledRadarChart>
          </ResponsiveContainer>
        </ChartWrapper>

        {/* Line Chart */}
        <ChartWrapper>
          <ResponsiveContainer width="100%" height="100%">
            <StyledLineChart data={lineChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="nitrogen" stroke={colors.primary} />
              <Line type="monotone" dataKey="phosphorus" stroke={colors.secondary} />
              <Line type="monotone" dataKey="potassium" stroke={colors.accent} />
            </StyledLineChart>
          </ResponsiveContainer>
        </ChartWrapper>

        {/* Bar Chart for Soil Texture */}
        <ChartWrapper>
          <ResponsiveContainer width="100%" height="100%">
            <StyledBarChart data={soilTextureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="percentage" fill={colors.primary} />
            </StyledBarChart>
          </ResponsiveContainer>
        </ChartWrapper>
      </ChartContainer>

      <AnalysisContainer>
        <ConditionTitle>
          <ConditionIcon>
            <FaLeaf />
          </ConditionIcon>
          Soil Condition:
        </ConditionTitle>
        <ConditionDescription>{soilCondition}</ConditionDescription>
      </AnalysisContainer>

      <CropSuggestionContainer>
        <CropTitle>Suggested Crops:</CropTitle>
        <CropList>
          {suggestedCrops.map((crop, index) => (
            <CropItem key={index}>
              <FaTint style={{ marginRight: '8px' }} />
              {crop}
            </CropItem>
          ))}
        </CropList>
      </CropSuggestionContainer>

      <SoilHealthTips>
        <TipsTitle>Soil Health Tips:</TipsTitle>
        <TipsList>
          <li>Maintain adequate organic matter by adding compost regularly.</li>
          <li>Implement crop rotation to prevent nutrient depletion.</li>
          <li>Use cover crops to reduce soil erosion and improve fertility.</li>
          <li>Monitor and manage soil moisture levels to optimize plant growth.</li>
          <li>Test soil regularly to adjust pH and nutrient levels as needed.</li>
        </TipsList>
      </SoilHealthTips>

      <ParameterDescriptions>
        <ParameterCard>
          <ParameterIcon>
            <FaLeaf />
          </ParameterIcon>
          <ParameterName>Nitrogen (N)</ParameterName>
          <ParameterDescription>
            Essential for plant growth, nitrogen is a key component of chlorophyll and amino acids.
          </ParameterDescription>
        </ParameterCard>

        <ParameterCard>
          <ParameterIcon>
            <FaTint />
          </ParameterIcon>
          <ParameterName>Phosphorus (P)</ParameterName>
          <ParameterDescription>
            Phosphorus supports energy transfer within plants and is vital for root development.
          </ParameterDescription>
        </ParameterCard>

        <ParameterCard>
          <ParameterIcon>
            <FaWater />
          </ParameterIcon>
          <ParameterName>Potassium (K)</ParameterName>
          <ParameterDescription>
            Potassium regulates various plant processes, including water uptake and enzyme activation.
          </ParameterDescription>
        </ParameterCard>

        <ParameterCard>
          <ParameterIcon>
            <FaAdjust />
          </ParameterIcon>
          <ParameterName>pH Level</ParameterName>
          <ParameterDescription>
            Indicates the acidity or alkalinity of the soil, affecting nutrient availability.
          </ParameterDescription>
        </ParameterCard>

        <ParameterCard>
          <ParameterIcon>
            <FaTemperatureHigh />
          </ParameterIcon>
          <ParameterName>Temperature</ParameterName>
          <ParameterDescription>
            Soil temperature influences seed germination and root growth.
          </ParameterDescription>
        </ParameterCard>

        <ParameterCard>
          <ParameterIcon>
            <FaSolarPanel />
          </ParameterIcon>
          <ParameterName>Moisture</ParameterName>
          <ParameterDescription>
            Soil moisture affects plant water uptake and overall health.
          </ParameterDescription>
        </ParameterCard>

        <ParameterCard>
          <ParameterIcon>
            <FaFlask />
          </ParameterIcon>
          <ParameterName>Organic Matter</ParameterName>
          <ParameterDescription>
            Organic matter improves soil structure, water retention, and nutrient availability.
          </ParameterDescription>
        </ParameterCard>

        <ParameterCard>
          <ParameterIcon>
            <FaTint />
          </ParameterIcon>
          <ParameterName>Cation Exchange Capacity (CEC)</ParameterName>
          <ParameterDescription>
            CEC measures the soil's ability to hold essential nutrients, impacting fertility.
          </ParameterDescription>
        </ParameterCard>

        <ParameterCard>
          <ParameterIcon>
            <FaTint />
          </ParameterIcon>
          <ParameterName>Electrical Conductivity (EC)</ParameterName>
          <ParameterDescription>
            EC indicates soil salinity levels, which can affect plant growth and nutrient uptake.
          </ParameterDescription>
        </ParameterCard>
      </ParameterDescriptions>
    </Container>
  );
}

export default SoilQualityTesting;
