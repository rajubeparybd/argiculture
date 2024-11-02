import React, {useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import tractorIconImg from '../../assets/images/tr.png';

// Fix for default icon issues with Webpack
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:
    'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom Icons
const laborIcon = new L.Icon({
  iconUrl: 'https://img.icons8.com/emoji/48/000000/man-farmer.png',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

const machineIcon = new L.Icon({
  iconUrl: tractorIconImg,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
  popupAnchor: [0, -30],
});

// Expanded and scattered demo data for labor
const laborData = [
  {
    name: 'Rahim',
    skills: 'Harvesting, Plowing',
    location: [22.3569, 91.7832], // Chittagong
    contact: '0123456789',
  },
  {
    name: 'Karim',
    skills: 'Sowing, Irrigation',
    location: [24.9045, 91.8611], // Sylhet
    contact: '0987654321',
  },
  {
    name: 'Sumon',
    skills: 'Weeding, Harvesting',
    location: [25.7439, 89.2752], // Rangpur
    contact: '01711223344',
  },
  {
    name: 'Anika',
    skills: 'Planting, Fertilizing',
    location: [22.7010, 90.3535], // Barisal
    contact: '01555667788',
  },
  {
    name: 'Hasan',
    skills: 'Pesticide Application',
    location: [24.7471, 90.4203], // Mymensingh
    contact: '01999887766',
  },
  {
    name: 'Lima',
    skills: 'Soil Testing, Seed Selection',
    location: [22.8456, 89.5403], // Khulna
    contact: '01888776655',
  },
  {
    name: 'Babul',
    skills: 'Crop Monitoring',
    location: [23.9422, 89.1930], // Faridpur
    contact: '01666554433',
  },
  {
    name: 'Shila',
    skills: 'Harvesting, Packing',
    location: [24.3636, 88.6241], // Rajshahi
    contact: '01333445566',
  },
];

// Expanded and scattered demo data for machinery
const machineData = [
  {
    name: 'Tractor A',
    type: 'Tractor',
    location: [23.8103, 90.4125], // Dhaka
    contact: '01122334455',
  },
  {
    name: 'Harvester B',
    type: 'Harvester',
    location: [21.4339, 91.9870], // Cox's Bazar
    contact: '06677889900',
  },
  {
    name: 'Irrigation Pump C',
    type: 'Irrigation Pump',
    location: [25.5910, 88.0798], // Dinajpur
    contact: '01888776655',
  },
  {
    name: 'Seeder D',
    type: 'Seeder',
    location: [23.4607, 91.1809], // Comilla
    contact: '01666554433',
  },
  {
    name: 'Drone Sprayer E',
    type: 'Drone Sprayer',
    location: [24.0958, 89.9207], // Pabna
    contact: '01333445566',
  },
  {
    name: 'Plow Machine F',
    type: 'Plow Machine',
    location: [22.4915, 90.8320], // Patuakhali
    contact: '01777888999',
  },
  {
    name: 'Fertilizer Spreader G',
    type: 'Fertilizer Spreader',
    location: [24.0007, 90.2257], // Gazipur
    contact: '01911223344',
  },
  {
    name: 'Crop Duster H',
    type: 'Crop Duster',
    location: [25.1337, 89.0034], // Lalmonirhat
    contact: '01444555666',
  },
];

function App() {
  const mapStyle = {
    width: '100%',
    height: '100vh',
  };

  // Responsive adjustments for mobile devices
  if (window.innerWidth <= 600) {
    mapStyle.height = '80vh';
  }
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="map">
      <MapContainer center={[23.6850, 90.3563]} zoom={7} style={mapStyle}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Labor Markers */}
        {laborData.map((labor, index) => (
          <Marker key={index} position={labor.location} icon={laborIcon}>
            <Popup>
              <div style={{ textAlign: 'center' }}>
                <b>{labor.name}</b>
                <br />
                Skills: {labor.skills}
                <br />
                Contact: {labor.contact}
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Machinery Markers */}
        {machineData.map((machine, index) => (
          <Marker key={index} position={machine.location} icon={machineIcon}>
            <Popup>
              <div style={{ textAlign: 'center' }}>
                <b>{machine.name}</b>
                <br />
                Type: {machine.type}
                <br />
                Contact: {machine.contact}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;