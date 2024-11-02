// src/App.jsx
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, set } from "firebase/database";

const App = () => {
  // Static Farm Details
  const farmDetails = {
    name: "Mahin's Farms & Plantation",
    id: "MYS-FRM-1",
    landArea: "4.5 acres",
    numberOfCrops: 3,
    previousYield: "26 tonnes",
  };

  // State variables for dynamic data
  const [sensorData, setSensorData] = useState({});
  const [fireDetected, setFireDetected] = useState(null);
  const [motorActive, setMotorActive] = useState(false);
  const [error, setError] = useState(null); // For error handling

  // Firebase Configuration (Replace with your actual config)
  const firebaseConfig = {
    apiKey: "AIzaSyCCn5ffP3xGPDTEMUbsMuHgNaacNQlhAt8",
    authDomain: "tuhin-a98b8.firebaseapp.com",
    databaseURL: "https://tuhin-a98b8-default-rtdb.firebaseio.com",
    projectId: "tuhin-a98b8",
    storageBucket: "tuhin-a98b8.appspot.com",
    messagingSenderId: "248726760217",
    appId: "1:248726760217:web:b74178aa30f27e6c083388",
    measurementId: "G-5G3YLCYRVF",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  useEffect(() => {
    console.log("Setting up Firebase listener...");

    // Reference to the root of the database
    const dbRef = ref(database, "/");

    // Set up a real-time listener
    const unsubscribe = onValue(
      dbRef,
      (snapshot) => {
        const data = snapshot.val();
        console.log("Firebase data snapshot:", data);

        if (data) {
          // Extract sensor data by excluding specific keys
          const {
            AirQuality,
            GasStatus,
            Location,
            Moisture,
            Nitrogen,
            PH,
            Phosphorus,
            Potassium,
            RainStatus,
            humidity,
            temperature,
            "water-TDS": waterTDS,
            "water-Temp": waterTemp,
            "water-pH": waterPH,
            ...rest
          } = data;

          // Update sensor data state
          setSensorData({
            AirQuality,
            GasStatus,
            Location,
            Moisture,
            Nitrogen,
            PH,
            Phosphorus,
            Potassium,
            RainStatus,
            humidity,
            temperature,
            waterTDS,
            waterTemp,
            waterPH,
          });

          // Update fireDetected state
          if (data.fireDetected !== undefined) {
            setFireDetected(data.fireDetected);
            console.log("Updated fireDetected:", data.fireDetected);
          } else {
            console.warn("No 'fireDetected' data found in Firebase.");
          }

          // Update motor status
          if (data.motorStatus && data.motorStatus.active !== undefined) {
            setMotorActive(data.motorStatus.active);
            console.log("Updated motorActive:", data.motorStatus.active);
          } else {
            console.warn("No 'motorStatus' data found in Firebase.");
          }

          // Reset error if data is fetched successfully
          setError(null);
        } else {
          console.warn("No data found in Firebase.");
          setError("No data available.");
        }
      },
      (error) => {
        console.error("Error fetching data from Firebase:", error);
        setError("Failed to fetch data.");
      }
    );

    // Cleanup listener on unmount
    return () => {
      console.log("Unsubscribing from Firebase listener...");
      unsubscribe();
    };
  }, [database]);

  // Function to toggle motor status
  const toggleMotor = () => {
    const newStatus = !motorActive;
    setMotorActive(newStatus);

    console.log(`Toggling motor status to: ${newStatus}`);

    // Update Firebase with the new motor status
    const motorRef = ref(database, "motorStatus");
    set(motorRef, {
      active: newStatus,
      timestamp: new Date().toISOString(),
    })
      .then(() => {
        console.log("Motor status updated successfully.");
      })
      .catch((error) => {
        console.error("Error updating motor status: ", error);
        setError("Failed to update motor status.");
      });
  };

  return (
    <div className="dashboard">
      <style>{`
        :root {
          --primary-color: #3498db;
          --secondary-color: #2c3e50;
          --background-color: #f0f2f5;
          --card-bg-color: #ffffff;
          --text-color: #333;
          --subtext-color: #555;
          --hover-bg-color: #e9ecef;
          --button-bg-color: #16a085;
          --button-hover-bg-color: #138d75;
        }

        /* Reset and Base Styles */
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: var(--background-color);
          color: var(--text-color);
        }

        /* Dashboard Layout */
        .dashboard {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          padding: 20px;
          width: 100%;
          /* Removed min-height to prevent forcing height */
          background-color: var(--background-color);
        }

        @media (max-width: 1200px) {
          .dashboard {
            grid-template-columns: 1fr;
          }
        }

        /* Columns */
        .left-column, .right-column {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* Cards */
        .card {
          background: var(--card-bg-color);
          border-radius: 12px;
          padding: 20px 20px 30px 20px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s forwards;
          /* Removed fixed height and overflow */
          /* overflow: hidden; */
          display: flex;
          flex-direction: column;
          /* Removed min-height to allow dynamic height */
          /* min-height: 350px; */
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.15);
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Typography */
        .card h2 {
          font-size: 1.6rem;
          margin-bottom: 10px;
          color: var(--secondary-color);
          position: relative;
          padding-bottom: 5px;
        }

        .card h2::after {
          content: '';
          position: absolute;
          width: 50px;
          height: 3px;
          background-color: var(--primary-color);
          bottom: 0;
          left: 0;
          border-radius: 2px;
        }

        .card p, .card span {
          font-size: 1rem;
          color: var(--subtext-color);
          word-wrap: break-word;
          word-break: break-word;
        }

        /* Farm Details */
        .farm-details table {
          width: 100%;
          table-layout: fixed;
        }

        .farm-details td {
          padding: 8px 0;
          word-wrap: break-word;
          max-width: 100%;
        }

        .farm-details td:first-child {
          font-weight: 600;
          color: var(--subtext-color);
          width: 40%;
        }

        /* Sensor Data */
        .sensor-grid .sensor-items {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .sensor-item {
          flex: 1 1 45%;
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          transition: background-color 0.3s ease;
        }

        .sensor-item:hover {
          background-color: var(--hover-bg-color);
        }

        .sensor-item::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 24px;
          margin-right: 10px;
          background-size: contain;
          background-repeat: no-repeat;
        }

        /* Define icons for each sensor */
        .sensor-AirQuality::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/air-quality.png');
        }

        .sensor-GasStatus::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/gas-cylinder.png');
        }

        .sensor-Location::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/marker.png');
        }

        .sensor-Moisture::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/humidity.png');
        }

        .sensor-Nitrogen::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/nitrogen.png');
        }

        .sensor-PH::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/ph.png');
        }

        .sensor-Phosphorus::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/phosphorus.png');
        }

        .sensor-Potassium::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/potassium.png');
        }

        .sensor-RainStatus::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/rain.png');
        }

        .sensor-humidity::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/humidity.png');
        }

        .sensor-temperature::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/temperature.png');
        }

        .sensor-waterTDS::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/water.png');
        }

        .sensor-waterTemp::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/temperature.png');
        }

        .sensor-waterPH::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/hydrogen.png');
        }

        .sensor-fireDetected::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/fire.png');
        }

        .sensor-motionDetected::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/motion-sensor.png');
        }

        .sensor-Store_fireDetected::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/fire.png');
        }

        .sensor-Store_humidity::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/humidity.png');
        }

        .sensor-Store_motionDetected::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/motion-sensor.png');
        }

        .sensor-Store_temperature::before {
          background-image: url('https://img.icons8.com/ios-filled/50/000000/temperature.png');
        }

        .sensor-name {
          font-weight: 500;
          color: var(--text-color);
          flex: 1;
        }

        .sensor-value {
          font-weight: 600;
          color: var(--primary-color);
          text-align: right;
          min-width: 40px;
        }

        /* Water Management */
        .water-management .motor-switch {
          width: 100%;
          padding: 12px 0;
          background-color: var(--button-bg-color);
          color: #fff;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 1rem;
          transition: background-color 0.3s ease;
          margin-bottom: 15px;
        }

        .water-management .motor-switch:hover {
          background-color: var(--button-hover-bg-color);
        }

        .water-management .content {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 10px;
        }

        .water-management .moisture-info, 
        .water-management .water-consumption, 
        .water-management .water-quality {
          background-color: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          /* Allow sections to take full width on smaller screens */
          flex: 1 1 45%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: background-color 0.3s ease;
        }

        .water-management .moisture-info:hover, 
        .water-management .water-consumption:hover, 
        .water-management .water-quality:hover {
          background-color: var(--hover-bg-color);
        }

        .water-management .moisture-info h3, 
        .water-management .water-consumption h3, 
        .water-management .water-quality h3 {
          font-size: 1.2rem;
          color: var(--secondary-color);
          margin-bottom: 10px;
        }

        .water-management .moisture-info p, 
        .water-management .water-consumption p, 
        .water-management .water-quality p {
          font-size: 1rem;
          color: var(--subtext-color);
          margin-bottom: 5px;
        }

        .water-management .circular-chart {
          position: relative;
          width: 100px;
          height: 100px;
          margin-bottom: 10px;
        }

        .water-management .circular-chart svg {
          transform: rotate(-90deg);
        }

        .water-management .circular-chart .chart-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: 600;
          color: var(--primary-color);
          font-size: 1rem;
        }

        /* Fire Alarm */
        .fire-alarm .fire-icon {
          display: block;
          margin: 0 auto;
          width: 60px;
          animation: shake 1s infinite;
        }

        @keyframes shake {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }

        .fire-info {
          background-color: #f8f9fa;
          padding: 15px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 15px;
        }

        .fire-info h3 {
          font-size: 1.2rem;
          color: var(--secondary-color);
          margin-bottom: 5px;
        }

        .fire-info p {
          font-size: 1rem;
          color: var(--subtext-color);
        }

        /* Responsive Adjustments for Water Management Sections */
        @media (max-width: 768px) {
          .water-management .content {
            flex-direction: column;
            align-items: center;
          }

          .water-management .moisture-info, 
          .water-management .water-consumption, 
          .water-management .water-quality {
            flex: 1 1 100%;
          }
        }

        /* Adjustments for Sensor Items on Smaller Screens */
        @media (max-width: 768px) {
          .sensor-item {
            flex: 1 1 100%;
          }
        }
      `}</style>

      <div className="left-column">
        {/* Farm Details (Static) */}
        <div className="card farm-details">
          <h2>Farm Details</h2>
          <table>
            <tbody>
              <tr>
                <td>Farm Name:</td>
                <td>{farmDetails.name}</td>
              </tr>
              <tr>
                <td>Farm ID:</td>
                <td>{farmDetails.id}</td>
              </tr>
              <tr>
                <td>Location:</td>
                <td>{farmDetails.location}</td>
              </tr>
              <tr>
                <td>Land Area:</td>
                <td>{farmDetails.landArea}</td>
              </tr>
              <tr>
                <td>Number of Crops:</td>
                <td>{farmDetails.numberOfCrops}</td>
              </tr>
              <tr>
                <td>Previous Yield:</td>
                <td>{farmDetails.previousYield}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Sensor Data (Dynamic) */}
        <div className="card sensor-grid">
          <h2>Sensor Data</h2>
          <div className="sensor-items">
            {error ? (
              <p>{error}</p>
            ) : Object.keys(sensorData).length === 0 ? (
              <p>Loading sensor data...</p>
            ) : (
              Object.keys(sensorData).map((sensor, index) => (
                <div key={index} className={`sensor-item sensor-${sensor}`}>
                  <span className="sensor-name">
                    {sensor
                      .replace(/_/g, ' ')
                      .replace(/\b\w/g, (char) => char.toUpperCase())}
                  </span>
                  <span className="sensor-value">{sensorData[sensor]}</span>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Additional Cards (e.g., Crop Yield) can be added here */}
      </div>

      <div className="right-column">
        {/* Water Management (Dynamic) */}
        <div className="card water-management">
          <h2>Water Management</h2>
          <button
            className="motor-switch"
            onClick={toggleMotor}
            aria-pressed={motorActive}
            aria-label="Toggle Motor"
          >
            {motorActive ? "Deactivate Motor" : "Activate Motor"}
          </button>
          <div className="content">
            {/* Moisture Information */}
            <div className="moisture-info">
              <h3>Moisture Detector</h3>
              <div className="info-content">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/humidity.png"
                  alt="Moisture Icon"
                  className="info-icon"
                />
                <p>
                  Current Soil Moisture:{" "}
                  {sensorData.Moisture ? `${sensorData.Moisture}%` : "Loading..."}
                </p>
              </div>
              <p>Threshold: 30%</p>
              <p>
                Status:{" "}
                {sensorData.Moisture ? (
                  parseFloat(sensorData.Moisture) < 30 ? (
                    "Water Needed"
                  ) : (
                    "Sufficient Moisture"
                  )
                ) : (
                  "Loading..."
                )}
              </p>
            </div>

            {/* Water Consumption (Static or Dynamic) */}
            <div className="water-consumption">
              <h3>Water Consumed</h3>
              <div className="circular-chart">
                <svg width="100" height="100">
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#e2e6ea"
                    strokeWidth="10"
                    fill="none"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="#3498db"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="282.6"
                    strokeDashoffset={282.6 * (1 - 0.56)} /* 56% */
                    strokeLinecap="round"
                  />
                </svg>
                <div className="chart-text">56%</div>
              </div>
              <p>27,910 litres</p>
            </div>

            {/* Water Quality Information */}
            <div className="water-quality">
              <h3>Water Quality</h3>
              <div className="info-content">
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/water.png"
                  alt="Water Quality Icon"
                  className="info-icon"
                />
                <p>
                  TDS: {sensorData.waterTDS ? `${sensorData.waterTDS} ppm` : "Loading..."}
                </p>
              </div>
              <p>
                Temperature: {sensorData.waterTemp ? `${sensorData.waterTemp} °C` : "Loading..."}
              </p>
              <p>
                pH: {sensorData.waterPH ? sensorData.waterPH : "Loading..."}
              </p>
            </div>
          </div>
        </div>

        {/* Fire Alarm (Dynamic) */}
        <div className="card fire-alarm">
          <h2>Fire Alarm</h2>
          <img
            src="https://img.icons8.com/emoji/96/000000/fire.png"
            alt="Fire Alert"
            className="fire-icon"
          />
          <div className="fire-info">
            <h3>
              Fire Detected:{" "}
              {fireDetected !== null ? (fireDetected ? "Yes" : "No") : "Loading..."}
            </h3>
            {/* Additional fire-related information can be added here */}
          </div>
        </div>

        {/* Additional Cards (e.g., Crop Recommendation) can be added here */}
      </div>
    </div>
  );
};

export default App;
