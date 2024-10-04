import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Papa from 'papaparse';

// Custom component to add a larger and more visible legend
function Legend() {
  const map = useMap();

  useEffect(() => {
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
      const div = L.DomUtil.create('div', 'info legend');
      div.style.background = 'white';
      div.style.padding = '15px';
      div.style.borderRadius = '8px';
      div.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.3)';
      div.style.lineHeight = '25px';  // Increase line height for better readability
      div.style.fontSize = '16px';  // Increase font size for better visibility
      div.style.color = '#333';  // Darker text for better contrast

      // Larger color boxes for legend items
      div.innerHTML += '<h4 style="margin-bottom: 10px;">Map Legend</h4>';
      div.innerHTML +=
        '<i style="background: #1a9641; width: 24px; height: 24px; display: inline-block; margin-right: 12px;"></i> DEM Terrain<br>';
      div.innerHTML +=
        '<i style="background: #FFA500; width: 24px; height: 24px; display: inline-block; margin-right: 12px;"></i> Water Resource Data<br>';
      return div;
    };

    legend.addTo(map);

    // Cleanup function to remove the legend when the component unmounts
    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
}

function App() {
  const mapStyle = { height: '100vh', width: '100vw' }; // Full screen map
  const [waterResourceData, setWaterResourceData] = useState([]);
  // Demo water resource data points across Bangladesh
  const demoData = [
      { latitude: 23.6850, longitude: 90.3563, value: 50 }, // Dhaka
      { latitude: 22.3569, longitude: 91.7832, value: 60 }, // Chittagong
      { latitude: 24.9045, longitude: 91.8611, value: 55 }, // Sylhet
      { latitude: 25.7439, longitude: 89.2752, value: 45 }, // Rangpur
      { latitude: 23.8103, longitude: 90.4125, value: 65 }, // Gazipur
      { latitude: 24.3636, longitude: 88.6241, value: 70 }, // Rajshahi
      { latitude: 22.8456, longitude: 89.5403, value: 75 }, // Khulna
      { latitude: 21.4282, longitude: 92.0058, value: 80 }, // Cox's Bazar
      { latitude: 22.7976, longitude: 89.5458, value: 68 }, // Mongla
      { latitude: 24.5100, longitude: 91.1235, value: 55 }, // Habiganj
      { latitude: 25.7466, longitude: 89.2395, value: 40 }, // Kurigram
      { latitude: 22.4966, longitude: 90.7123, value: 58 }, // Barisal
      { latitude: 22.3240, longitude: 91.0973, value: 65 }, // Feni
      { latitude: 23.2706, longitude: 91.3631, value: 72 }, // Comilla
      { latitude: 24.0183, longitude: 90.4077, value: 62 }, // Narayanganj
      { latitude: 23.4958, longitude: 91.1410, value: 48 }, // Brahmanbaria
      { latitude: 23.9322, longitude: 89.1231, value: 66 }, // Manikganj
      { latitude: 23.4225, longitude: 89.5863, value: 52 }, // Faridpur
      { latitude: 24.7242, longitude: 90.3899, value: 49 }, // Mymensingh
      { latitude: 22.9350, longitude: 89.2157, value: 70 }, // Satkhira
      { latitude: 25.2887, longitude: 89.3306, value: 43 }, // Lalmonirhat
      { latitude: 25.7904, longitude: 88.8487, value: 41 }, // Thakurgaon
      { latitude: 23.4607, longitude: 91.1793, value: 62 }, // Lakshmipur
      { latitude: 25.6260, longitude: 88.6410, value: 37 }, // Panchagarh
      { latitude: 24.6850, longitude: 88.1286, value: 58 }, // Naogaon
      { latitude: 23.5952, longitude: 89.8415, value: 60 }, // Madaripur
      { latitude: 24.4944, longitude: 88.1686, value: 72 }, // Natore
      { latitude: 22.9668, longitude: 91.4549, value: 76 }, // Noakhali
      { latitude: 23.0798, longitude: 89.6469, value: 64 }, // Gopalganj
      { latitude: 25.0249, longitude: 88.9172, value: 53 }, // Dinajpur
      { latitude: 23.6805, longitude: 88.6555, value: 67 }, // Kushtia
      { latitude: 22.8925, longitude: 89.4970, value: 74 }, // Bagerhat
      { latitude: 24.0974, longitude: 90.9844, value: 66 }, // Kishoreganj
      { latitude: 23.1586, longitude: 89.5442, value: 63 }, // Magura
      { latitude: 23.5408, longitude: 90.1415, value: 59 }, // Munshiganj
      { latitude: 23.3833, longitude: 91.4011, value: 68 }, // Chandpur
      { latitude: 22.2242, longitude: 89.5250, value: 77 }, // Patuakhali
      { latitude: 22.7100, longitude: 90.3736, value: 61 }, // Jhalokati
      { latitude: 24.4113, longitude: 90.6200, value: 55 }, // Jamalpur
      { latitude: 23.3334, longitude: 88.9833, value: 72 }, // Meherpur
      { latitude: 24.0132, longitude: 88.9937, value: 66 }, // Chuadanga
      { latitude: 24.8103, longitude: 90.6566, value: 48 }, // Sherpur
      { latitude: 23.0084, longitude: 89.1406, value: 60 }, // Narail
      { latitude: 25.7834, longitude: 89.2225, value: 44 }, // Gaibandha
      { latitude: 24.1065, longitude: 89.4047, value: 68 }  // Pabna

  
  ];

  useEffect(() => {
    console.log("Fetching water resource CSV...");
    
    // Fetch the CSV file from the public folder
    Papa.parse('/water_resource.csv', {
      download: true,
      header: true,
      complete: function (results) {
        // Check if the CSV file is loaded properly
        console.log("CSV Loaded:", results.data);
        
        if (results.errors.length) {
          console.error("CSV Parsing Errors:", results.errors);
        }

        // Filter the data to include only points within Bangladesh's approximate bounds
        const filteredData = results.data.filter((data) => {
          const lat = parseFloat(data.latitude);
          const lon = parseFloat(data.longitude);
          
          // Add checks for valid lat/lon
          if (!isNaN(lat) && !isNaN(lon)) {
            return lat >= 20 && lat <= 27 && lon >= 88 && lon <= 93;
          }
          return false;
        });

        console.log("Filtered Data for Bangladesh:", filteredData);
        
        // If filtered data exists, set it, otherwise fallback to demoData
        if (filteredData.length > 0) {
          setWaterResourceData(filteredData);
        } else {
          console.warn("No valid data from CSV, using demo data...");
          setWaterResourceData(demoData);
        }
      },
      error: function (error) {
        console.error("Failed to load CSV file:", error);
        setWaterResourceData(demoData); // Fallback to demo data if CSV fails
      },
    });
  }, []);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="App">
      <MapContainer
        center={[23.6850, 90.3563]} // Bangladesh coordinates
        zoom={7}
        style={mapStyle} // Full screen map style
      >
        {/* Basemap tile layer */}
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* DEM TileLayer from MapTiler */}
        <TileLayer
          attribution="&copy; MapTiler DEM"
          url="https://api.maptiler.com/tiles/terrain-rgb/{z}/{x}/{y}.png?key=8snDRoOxEMhir3L1qx64"
          opacity={0.6} // Adjust opacity as needed
        />

        {/* Water resource data markers */}
        {waterResourceData.map((data, index) => (
          <CircleMarker
            key={index}
            center={[parseFloat(data.latitude), parseFloat(data.longitude)]}
            radius={5}
            fillColor="#FFA500"
            color="#FFA500"
            weight={1}
            opacity={1}
            fillOpacity={0.6}
          >
            <Popup>
              Water Resource Value: {data.value}
            </Popup>
          </CircleMarker>
        ))}

        {/* Add the larger and more visible Legend */}
        <Legend />
      </MapContainer>
    </div>
  );
}

export default App;