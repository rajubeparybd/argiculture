// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/Home/HomePage';
import CropSuggestion from './pages/Services/CropSuggestion';
import DiseaseClassification from './pages/Services/DiseaseClassification';
import WaterResource from './pages/Services/WaterResource';
import SoilQualityTesting from './pages/Services/SoilQualityTesting';
import ChatBot from './pages/Services/ChatBot';
import Hire from './pages/Services/hire';
import ContactUsPage from './pages/ContactUs/ContactUsPage';
import AboutUsDetail from './pages/AboutUs/AboutUsDetail';
import Marketplace from './pages/Services/Marketplace';
import Dashboard from './pages/Dashboard/dashboard';
import Fertilizer from './pages/Services/Fertilizer';
import CarbonFootprint from './pages/Services/CarbonFootprint';
import MyPosts from './pages/Marketplace/MyPosts';
// import  CartProvider from './context/CartContext';
// import Checkout from './pages/Services/Checkout';
const MainContent = styled.main`
  padding-top: 80px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 100px; /* Adjust if NavBar height increases on mobile */
  }
`;
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {/* <CartProvider> */}
      <Router>
        <NavBar />
        {/* <MainContent> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* Existing Service Routes */}
          <Route path="/services/crop-suggestion" element={<CropSuggestion />} />
          <Route path="/services/disease-classification" element={<DiseaseClassification />} />
          <Route path="/services/water-resource" element={<WaterResource />} />
          <Route path="/services/chatbot" element={<ChatBot />} />
          <Route path="/services/fertilizer" element={<Fertilizer />} />
          <Route path="/services/CarbonFootprint" element={<CarbonFootprint />} />

          <Route path="/services/hire" element={<Hire />} />
          <Route path="/services/soil-quality-testing" element={<SoilQualityTesting />} />
          {/* New Marketplace Routes */}
          <Route path="/services/marketplace" element={<Marketplace />} />
          <Route path="/services/my-posts" element={<MyPosts />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/about-us-detail" element={<AboutUsDetail />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        {/* </MainContent> */}
        <Footer />
      </Router>
      {/* </CartProvider> */}
    </ThemeProvider>
  );
}

export default App;
