import React, {useEffect }from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';

const data = [
  {
    id: 1,
    name: 'Area 1',
    coords: [51.505, -0.09],
    waterLevel: 2.5, // in meters
  },
  {
    id: 2,
    name: 'Area 2',
    coords: [51.515, -0.1],
    waterLevel: 3.2,
  },
  {
    id: 3,
    name: 'Area 3',
    coords: [51.52, -0.12],
    waterLevel: 1.8,
  },
  // Add more data as needed
];

const FullScreenMapWrapper = styled.div`
  width: 100%;
  height: 100vh; /* Full screen height */
  position: relative;
`;

const Legend = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  background-color: rgba(255, 255, 255, 0.9); /* Slightly transparent background */
  padding: 20px; /* Increase padding for a larger legend */
  border-radius: 8px; /* Increase border-radius for a smoother look */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  z-index: 1000; /* Ensure the legend stays above the map */
  font-size: 16px; /* Increase font size */
`;

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px; /* Increase margin between items */

  &:last-child {
    margin-bottom: 0;
  }
`;

const LegendColor = styled.span`
  display: inline-block;
  width: 30px; /* Increase width */
  height: 30px; /* Increase height */
  margin-right: 15px; /* Increase margin-right for spacing */
  background-color: ${(props) => props.color};
  border-radius: 5px; /* Increase border-radius for the color boxes */
`;

const WaterResource = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <FullScreenMapWrapper>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', position: 'relative', overflow: 'hidden' }} 
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {data.map((location) => (
          <Circle
            key={location.id}
            center={location.coords}
            radius={location.waterLevel * 1000} // radius in meters (scaled by water level)
            color={location.waterLevel > 3 ? 'red' : location.waterLevel > 2 ? 'orange' : 'green'}
            fillOpacity={0.4}
          >
            <Popup>
              <div>
                <strong>{location.name}</strong>
                <br />
                Water Level: {location.waterLevel} meters
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>

      <Legend>
        <h4>Water Level Legend</h4>
        <LegendItem>
          <LegendColor color="green" />
          <span>Low (≤ 2 meters)</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="orange" />
          <span>Moderate (2 - 3 meters)</span>
        </LegendItem>
        <LegendItem>
          <LegendColor color="red" />
          <span>High (&gt; 3 meters)</span> {/* Escaped ">" character */}
        </LegendItem>
      </Legend>
    </FullScreenMapWrapper>
  );
};

export default WaterResource;
