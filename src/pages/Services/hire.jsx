// // src/App.js

// import React, {useEffect } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import tractorIconImg from '../../assets/images/tr.png';

// // Fix for default icon issues with Webpack
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
//   iconUrl:
//     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
//   shadowUrl:
//     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
// });

// // Custom Icons
// const laborIcon = new L.Icon({
//   iconUrl: 'https://img.icons8.com/emoji/48/000000/man-farmer.png',
//   iconSize: [30, 30],
//   iconAnchor: [15, 30],
//   popupAnchor: [0, -30],
// });

// const machineIcon = new L.Icon({
//   iconUrl: tractorIconImg,
//   iconSize: [30, 30],
//   iconAnchor: [15, 30],
//   popupAnchor: [0, -30],
// });

// // Expanded and scattered demo data for labor
// const laborData = [
//   {
//     name: 'Rahim',
//     skills: 'Harvesting, Plowing',
//     location: [22.3569, 91.7832], // Chittagong
//     contact: '0123456789',
//   },
//   {
//     name: 'Karim',
//     skills: 'Sowing, Irrigation',
//     location: [24.9045, 91.8611], // Sylhet
//     contact: '0987654321',
//   },
//   {
//     name: 'Sumon',
//     skills: 'Weeding, Harvesting',
//     location: [25.7439, 89.2752], // Rangpur
//     contact: '01711223344',
//   },
//   {
//     name: 'Anika',
//     skills: 'Planting, Fertilizing',
//     location: [22.7010, 90.3535], // Barisal
//     contact: '01555667788',
//   },
//   {
//     name: 'Hasan',
//     skills: 'Pesticide Application',
//     location: [24.7471, 90.4203], // Mymensingh
//     contact: '01999887766',
//   },
//   {
//     name: 'Lima',
//     skills: 'Soil Testing, Seed Selection',
//     location: [22.8456, 89.5403], // Khulna
//     contact: '01888776655',
//   },
//   {
//     name: 'Babul',
//     skills: 'Crop Monitoring',
//     location: [23.9422, 89.1930], // Faridpur
//     contact: '01666554433',
//   },
//   {
//     name: 'Shila',
//     skills: 'Harvesting, Packing',
//     location: [24.3636, 88.6241], // Rajshahi
//     contact: '01333445566',
//   },
// ];

// // Expanded and scattered demo data for machinery
// const machineData = [
//   {
//     name: 'Tractor A',
//     type: 'Tractor',
//     location: [23.8103, 90.4125], // Dhaka
//     contact: '01122334455',
//   },
//   {
//     name: 'Harvester B',
//     type: 'Harvester',
//     location: [21.4339, 91.9870], // Cox's Bazar
//     contact: '06677889900',
//   },
//   {
//     name: 'Irrigation Pump C',
//     type: 'Irrigation Pump',
//     location: [25.5910, 88.0798], // Dinajpur
//     contact: '01888776655',
//   },
//   {
//     name: 'Seeder D',
//     type: 'Seeder',
//     location: [23.4607, 91.1809], // Comilla
//     contact: '01666554433',
//   },
//   {
//     name: 'Drone Sprayer E',
//     type: 'Drone Sprayer',
//     location: [24.0958, 89.9207], // Pabna
//     contact: '01333445566',
//   },
//   {
//     name: 'Plow Machine F',
//     type: 'Plow Machine',
//     location: [22.4915, 90.8320], // Patuakhali
//     contact: '01777888999',
//   },
//   {
//     name: 'Fertilizer Spreader G',
//     type: 'Fertilizer Spreader',
//     location: [24.0007, 90.2257], // Gazipur
//     contact: '01911223344',
//   },
//   {
//     name: 'Crop Duster H',
//     type: 'Crop Duster',
//     location: [25.1337, 89.0034], // Lalmonirhat
//     contact: '01444555666',
//   },
// ];

// function App() {
//   const mapStyle = {
//     width: '100%',
//     height: '100vh',
//   };

//   // Responsive adjustments for mobile devices
//   if (window.innerWidth <= 600) {
//     mapStyle.height = '80vh';
//   }
//   useEffect(() => {
//     window.scroll(0, 0);
//   }, []);
//   return (
//     <div id="map">
//       <MapContainer center={[23.6850, 90.3563]} zoom={7} style={mapStyle}>
//         <TileLayer
//           attribution="&copy; OpenStreetMap contributors"
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />

//         {/* Labor Markers */}
//         {laborData.map((labor, index) => (
//           <Marker key={index} position={labor.location} icon={laborIcon}>
//             <Popup>
//               <div style={{ textAlign: 'center' }}>
//                 <b>{labor.name}</b>
//                 <br />
//                 Skills: {labor.skills}
//                 <br />
//                 Contact: {labor.contact}
//               </div>
//             </Popup>
//           </Marker>
//         ))}

//         {/* Machinery Markers */}
//         {machineData.map((machine, index) => (
//           <Marker key={index} position={machine.location} icon={machineIcon}>
//             <Popup>
//               <div style={{ textAlign: 'center' }}>
//                 <b>{machine.name}</b>
//                 <br />
//                 Type: {machine.type}
//                 <br />
//                 Contact: {machine.contact}
//               </div>
//             </Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }

// export default App;


// Dashboard.jsx

import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import styled, { createGlobalStyle } from 'styled-components';

// Global Styles
const GlobalStyle = createGlobalStyle`
  /* Importing Google Font */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #e9ecef;
    margin: 0;
    padding: 20px;
  }
`;

// Styled Components
const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const DashboardSection = styled.div`
  background-color: #fff;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 600px;

  h1 {
    font-size: 2.5rem;
    color: #343a40;
    margin-bottom: 20px;
    position: relative;
  }

  h1::after {
    content: '';
    width: 60px;
    height: 4px;
    background-color: #20c997;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: 400px;
  overflow-y: auto;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.05);
`;

const DataItemContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: #495057;
  background-color: #fff;
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(32, 201, 151, 0.1);
  transition: background-color 0.3s, transform 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #e9ecef;
    transform: translateY(-2px);
  }

  img {
    width: 50px;
    height: 50px;
    margin-right: 20px;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    display: flex;
    align-items: center;
  }
`;

const SensorValue = styled.span`
  font-weight: 700;
  margin-left: 10px;
  padding: 5px 12px;
  border-radius: 5px;
  color: white;
  background-color: ${(props) => {
    switch (props.colorClass) {
      case 'red':
        return '#ff6b6b';
      case 'blue':
        return '#339af0';
      case 'green':
        return '#51cf66';
      case 'orange':
        return '#ffa94d';
      default:
        return '#845ef7';
    }
  }};
`;

// Your Firebase configuration
const firebaseConfig = {
  // Replace with your Firebase configuration details
  apiKey: "AIzaSyCCn5ffP3xGPDTEMUbsMuHgNaacNQlhAt8",
            authDomain: "tuhin-a98b8.firebaseapp.com",
            databaseURL: "https://tuhin-a98b8-default-rtdb.firebaseio.com",
            projectId: "tuhin-a98b8",
            storageBucket: "tuhin-a98b8.appspot.com",
            messagingSenderId: "248726760217",
            appId: "1:248726760217:web:b74178aa30f27e6c083388",
            measurementId: "G-5G3YLCYRVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

const Dashboard = () => {
  const [iotData, setIoTData] = useState(null);
  const [nasaData, setNasaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch IoT Data from Firebase
    const dataRef = ref(database, '/');
    const unsubscribe = onValue(
      dataRef,
      (snapshot) => {
        const data = snapshot.val();
        setIoTData(data);
        setLoading(false);
      },
      (error) => {
        setError(error.message);
        setLoading(false);
      }
    );

    // Fetch NASA Data (Mock Data)
    const mockNasaData = {
      'Atmospheric Pressure': '1000 hPa',
      'Wind Speed': '12 km/h',
      'Carbon Dioxide': '400 ppm',
      'Ozone Levels': '300 DU',
    };
    setNasaData(mockNasaData);

    // Cleanup subscription on unmount
    return () => {
      off(dataRef, 'value', unsubscribe);
    };
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <GlobalStyle />
      <DashboardContainer>
        {/* IoT Data Section */}
        <DashboardSection>
          <h1>FARMER'S DIARY (IoT Data)</h1>
          <DataContainer>
            {/* Display IoT Data */}
            {iotData ? (
              Object.keys(iotData).map((key) => (
                <DataItem key={key} name={key} value={iotData[key]} />
              ))
            ) : (
              <p>No IoT data available.</p>
            )}
          </DataContainer>
        </DashboardSection>

        {/* NASA Data Section */}
        <DashboardSection>
          <h1>NASA Data</h1>
          <DataContainer>
            {/* Display NASA Data */}
            {nasaData ? (
              Object.keys(nasaData).map((key) => (
                <DataItem key={key} name={key} value={nasaData[key]} />
              ))
            ) : (
              <p>No NASA data available.</p>
            )}
          </DataContainer>
        </DashboardSection>
      </DashboardContainer>
    </>
  );
};

const DataItem = ({ name, value }) => {
  // Function to assign color class based on the key
  const assignColorClass = (key) => {
    switch (key.toLowerCase()) {
      case 'temperature':
        return 'red';
      case 'humidity':
        return 'blue';
      case 'soilmoisture':
        return 'green';
      case 'lightintensity':
        return 'orange';
      default:
        return 'purple';
    }
  };

  const colorClass = assignColorClass(name);

  return (
    <DataItemContainer>
      <img
        src={`https://source.unsplash.com/50x50/?${encodeURIComponent(name)}`}
        alt={name}
      />
      <span>
        <strong>{name}</strong>:
        <SensorValue colorClass={colorClass}>
          {typeof value === 'object' ? JSON.stringify(value) : value}
        </SensorValue>
      </span>
    </DataItemContainer>
  );
};

export default Dashboard;
