
import React, { useState,useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell,
} from 'recharts';

/**
 * CarbonFootprintTracking Component
 * 
 * This component tracks and visualizes carbon emissions data.
 * Users can view emissions over time, sources of emissions, and receive insights
 * to help reduce their carbon footprint.
 */
const CarbonFootprint= () => {
  // Sample data for carbon emissions over the past year
  const emissionsData = [
    { month: 'Jan', emissions: 400 },
    { month: 'Feb', emissions: 300 },
    { month: 'Mar', emissions: 200 },
    { month: 'Apr', emissions: 278 },
    { month: 'May', emissions: 189 },
    { month: 'Jun', emissions: 239 },
    { month: 'Jul', emissions: 349 },
    { month: 'Aug', emissions: 200 },
    { month: 'Sep', emissions: 300 },
    { month: 'Oct', emissions: 400 },
    { month: 'Nov', emissions: 500 },
    { month: 'Dec', emissions: 600 },
  ];

  // Sample data for emissions sources
  const sourcesData = [
    { name: 'Transportation', value: 240 },
    { name: 'Agriculture', value: 130 },
    { name: 'Industry', value: 300 },
    { name: 'Residential', value: 100 },
    { name: 'Other', value: 50 },
  ];

  // Define colors for the Pie Chart
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A'];

  // State for selected time range filter
  const [timeRange, setTimeRange] = useState('12');

  // Handler for time range change
  const handleTimeRangeChange = (e) => {
    setTimeRange(e.target.value);
  };

  // Function to filter emissions data based on time range
  const getFilteredEmissionsData = () => {
    const months = parseInt(timeRange, 10);
    if (months === 12) return emissionsData;
    return emissionsData.slice(-months);
  };

  // Retrieve the primary color from CSS
  const primaryColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--primary-color')
    .trim();
useEffect(() => {
        window.scroll(0, 0);
      }, []);
  return (
    <div className="carbon-footprint-page">
      {/* Inline CSS Styling */}
      <style>{`
        :root {
          --primary-color: #27ae60;
          --secondary-color: #2c3e50;
          --background-color: #f0f2f5;
          --card-bg-color: #ffffff;
          --text-color: #333333;
          --subtext-color: #555555;
          --hover-bg-color: #e9ecef;
          --button-bg-color: #2980b9;
          --button-hover-bg-color: #1f618d;
          --chart-bg-color: #ecf0f1;
          --border-radius: 10px;
          --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        /* Page Container */
        .carbon-footprint-page {
          padding: 20px;
          background-color: var(--background-color);
          min-height: 100vh;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Header */
        .carbon-footprint-page h1 {
          text-align: center;
          color: var(--secondary-color);
          margin-bottom: 10px;
          font-size: 2rem;
        }

        .carbon-footprint-page p.description {
          text-align: center;
          color: var(--subtext-color);
          margin-bottom: 30px;
          font-size: 1.1rem;
        }

        /* Filters */
        .filters {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
          gap: 10px;
          flex-wrap: wrap;
        }

        .filters select {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          font-size: 1rem;
          background-color: var(--card-bg-color);
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .filters select:hover {
          background-color: var(--hover-bg-color);
        }

        /* Charts Container */
        .charts-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
          padding: 0 20px;
        }

        /* Emissions Line Chart */
        .emissions-chart, .sources-chart {
          background-color: var(--card-bg-color);
          border-radius: var(--border-radius);
          padding: 20px;
          box-shadow: var(--box-shadow);
        }

        .emissions-chart h2, .sources-chart h2 {
          text-align: center;
          color: var(--secondary-color);
          margin-bottom: 20px;
          font-size: 1.5rem;
        }

        /* Insights Section */
        .insights {
          padding: 20px;
          background-color: var(--card-bg-color);
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          max-width: 800px;
          margin: 40px auto 0 auto;
        }

        .insights h2 {
          color: var(--secondary-color);
          margin-bottom: 15px;
          font-size: 1.5rem;
          text-align: center;
        }

        .insights ul {
          list-style-type: disc;
          padding-left: 20px;
          color: var(--subtext-color);
        }

        .insights li {
          margin-bottom: 10px;
          font-size: 1rem;
        }

        /* Visually Hidden for Accessibility */
        .visually-hidden {
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .charts-container {
            gap: 20px;
          }

          .insights {
            padding: 15px;
            margin: 20px auto 0 auto;
          }

          .carbon-footprint-page h1 {
            font-size: 1.5rem;
          }

          .carbon-footprint-page p.description {
            font-size: 1rem;
          }

          .filters select {
            width: 100%;
            max-width: 300px;
          }

          .emissions-chart, .sources-chart {
            padding: 15px;
          }

          .insights h2 {
            font-size: 1.3rem;
          }

          .insights li {
            font-size: 0.95rem;
          }
        }
      `}</style>

      {/* Page Header */}
      <h1>Carbon Footprint Tracking</h1>
      <p className="description">
        Monitor and analyze your carbon emissions to make informed decisions towards sustainability.
      </p>

      {/* Filters */}
      <div className="filters">
        <label htmlFor="timeRange" className="visually-hidden">Select Time Range</label>
        <select id="timeRange" value={timeRange} onChange={handleTimeRangeChange}>
          <option value="3">Last 3 Months</option>
          <option value="6">Last 6 Months</option>
          <option value="12">Last 12 Months</option>
        </select>
      </div>

      {/* Charts Container */}
      <div className="charts-container">
        {/* Emissions Line Chart */}
        <div className="emissions-chart">
          <h2>Carbon Emissions Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={getFilteredEmissionsData()}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis label={{ value: 'Emissions (tons)', angle: -90, position: 'insideLeft' }} />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="emissions" stroke={primaryColor} activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Emissions Sources Pie Chart */}
        <div className="sources-chart">
          <h2>Emissions by Source</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={sourcesData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {sourcesData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Insights Section */}
      <div className="insights">
        <h2>Insights to Reduce Your Carbon Footprint</h2>
        <ul>
          <li><strong>Optimize Transportation:</strong> Use fuel-efficient vehicles or switch to electric options to reduce emissions.</li>
          <li><strong>Energy Efficiency:</strong> Upgrade to energy-efficient appliances and improve insulation in your facilities.</li>
          <li><strong>Sustainable Agriculture:</strong> Implement practices like crop rotation and organic farming to enhance soil health and reduce reliance on chemical fertilizers.</li>
          <li><strong>Waste Management:</strong> Reduce, reuse, and recycle waste materials to minimize landfill emissions.</li>
          <li><strong>Renewable Energy:</strong> Invest in solar or wind energy systems to power your operations sustainably.</li>
          <li><strong>Carbon Offsetting:</strong> Participate in carbon offset programs to compensate for unavoidable emissions.</li>
          <li><strong>Educate and Engage:</strong> Train your team on sustainable practices and encourage active participation in carbon reduction initiatives.</li>
        </ul>
      </div>
    </div>
  );
};

export default CarbonFootprint;
