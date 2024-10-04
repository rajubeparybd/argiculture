// src/App.js
import React, { useState, useEffect } from 'react';
import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  Tooltip,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default icon images (optional but recommended)
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

// Fix the default icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

// Legend component defined within the same file
const Legend = ({ getColor }) => {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'info legend');
      const grades = [0, 10, 20, 30];
      const labels = [];

      // Loop through intervals to generate labels and colors
      for (let i = 0; i < grades.length; i++) {
        div.innerHTML +=
          '<i style="background:' +
          getColor(grades[i] + 1) +
          '"></i> ' +
          grades[i] +
          (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
      }

      return div;
    };

    legend.addTo(map);

    // Clean up the legend on component unmount
    return () => {
      legend.remove();
    };
  }, [map, getColor]);

  return null;
};

function App() {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    // Generate 500 random data points
    const randomData = generateRandomData(500);
    setDataPoints(randomData);
  }, []);

  // Function to generate random data points
  const generateRandomData = (numPoints) => {
    const data = [];

    for (let i = 0; i < numPoints; i++) {
      const latitude = Math.random() * 180 - 90; // Range: -90 to 90
      const longitude = Math.random() * 360 - 180; // Range: -180 to 180
      const value = Math.floor(Math.random() * 50); // Range: 0 to 49

      data.push({ latitude, longitude, value });
    }

    return data;
  };

  // Function to determine marker color based on value
  const getColor = (value) => {
    if (value < 10) return '#f7fbff';
    if (value < 20) return '#c6dbef';
    if (value < 30) return '#6baed6';
    return '#2171b5';
  };

  // CSS styles for the legend
  const legendStyle = `
    .info.legend {
      background-color: white;
      padding: 6px 8px;
      font: 14px/16px Arial, Helvetica, sans-serif;
      border-radius: 5px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
    }
    .info.legend i {
      width: 18px;
      height: 18px;
      float: left;
      margin-right: 8px;
      opacity: 0.7;
    }
  `;

  return (
    <div className="App">
      <h1>Water Footprint Map Visualization</h1>
      {/* Include legend styles */}
      <style>{legendStyle}</style>
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '600px' }}>
        {/* Map tiles */}
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Render random data points */}
        {dataPoints.map((point, idx) => (
          <CircleMarker
            key={idx}
            center={[point.latitude, point.longitude]}
            radius={3 + point.value * 0.2} // Adjust radius based on value
            fillColor={getColor(point.value)}
            color="#000"
            weight={1}
            opacity={1}
            fillOpacity={0.8}
          >
            <Popup>
              <div>
                <strong>Value:</strong> {point.value}
              </div>
            </Popup>
            <Tooltip direction="top" offset={[0, -10]} opacity={1}>
              <span>Value: {point.value}</span>
            </Tooltip>
          </CircleMarker>
        ))}
        {/* Add the legend to the map */}
        <Legend getColor={getColor} />
      </MapContainer>
    </div>
  );
}

export default App;
