// src/components/SoilQualityTesting.jsx
// import firebase from '../../firebase';
import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const ChartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const AnalysisContainer = styled.div`
  margin-top: 40px;
`;

const ConditionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
`;

const ConditionDescription = styled.p`
  font-size: 18px;
`;

const CropSuggestionContainer = styled.div`
  margin-top: 30px;
`;

const CropList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const CropItem = styled.li`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.primary};
`;

function SoilQualityTesting() {
  const [sensorData, setSensorData] = useState(null);
  const [soilCondition, setSoilCondition] = useState('');
  const [suggestedCrops, setSuggestedCrops] = useState([]);

  useEffect(() => {

//   try {
//     const db = firebase.database();
//     const dataRef = db.ref('/sensorData');

//     dataRef.on('value', (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         setSensorData(data);
//         analyzeSoilCondition(data);
//       } else {
//         console.error('No data found in Firebase.');
//       }
//     });
//   } catch (error) {
//     console.error('Error fetching data from Firebase:', error);
//   }
// };

//     // fetchData();
  }, []);

  const analyzeSoilCondition = (data) => {
    // Simple analysis logic based on sensor data
    let condition = '';
    const { nitrogen, phosphorus, potassium, pH, temperature, moisture } = data;

    // Example analysis (you can adjust thresholds based on agricultural standards)
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

    setSoilCondition(condition);

    suggestCrops({
      nitrogen,
      phosphorus,
      potassium,
      pH,
      temperature,
      moisture,
    });
  };

  const suggestCrops = (data) => {
    // Simple crop suggestion logic
    let crops = [];

    if (data.nitrogen >= 20 && data.phosphorus >= 15 && data.potassium >= 10 && data.pH >= 6.0 && data.pH <= 7.5) {
      crops = ['Wheat', 'Corn', 'Soybean'];
    } else if (data.pH < 6.0) {
      crops = ['Blueberries', 'Potatoes', 'Sweet Potatoes'];
    } else if (data.pH > 7.5) {
      crops = ['Barley', 'Alfalfa', 'Sugar Beet'];
    } else {
      crops = ['Sorghum', 'Millet', 'Cassava'];
    }

    setSuggestedCrops(crops);
  };

  if (sensorData) {
    return <p>Loading sensor data...</p>;
  }

  // Prepare data for charts
  const chartData = [
    { name: 'Nitrogen', value: sensorData.nitrogen },
    { name: 'Phosphorus', value: sensorData.phosphorus },
    { name: 'Potassium', value: sensorData.potassium },
    { name: 'pH', value: sensorData.pH },
    { name: 'Moisture', value: sensorData.moisture },
    { name: 'Temperature', value: sensorData.temperature },
  ];

  return (
    <Container>
      <Title>Soil Quality Testing</Title>
      <ChartContainer>
        {/* Radar Chart */}
        <RadarChart outerRadius={150} width={500} height={400} data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="name" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar name="Soil Parameters" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Legend />
        </RadarChart>

        {/* Line Chart (if you have historical data) */}
        <LineChart width={500} height={400} data={historicalData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="nitrogen" stroke="#8884d8" />
          <Line type="monotone" dataKey="phosphorus" stroke="#82ca9d" />
          <Line type="monotone" dataKey="potassium" stroke="#ffc658" />
        </LineChart>
      </ChartContainer>

      <AnalysisContainer>
        <ConditionTitle>Soil Condition:</ConditionTitle>
        <ConditionDescription>{soilCondition}</ConditionDescription>
      </AnalysisContainer>

      <CropSuggestionContainer>
        <ConditionTitle>Suggested Crops:</ConditionTitle>
        <CropList>
          {suggestedCrops.map((crop, index) => (
            <CropItem key={index}>{crop}</CropItem>
          ))}
        </CropList>
      </CropSuggestionContainer>
    </Container>
  );
}

export default SoilQualityTesting;
