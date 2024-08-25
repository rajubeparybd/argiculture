import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/globalStyles';
import theme from './styles/theme';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './pages/Home/HomePage';
import CropSuggestion from './pages/Services/CropSuggestion';
import DiseaseClassification from './pages/Services/DiseaseClassification';
import WaterResource from './pages/Services/WaterResource';
import ChatBot from './pages/Services/ChatBot';
import ContactUsPage from './pages/ContactUs/ContactUsPage';
import AboutUsDetail from './pages/AboutUs/AboutUsDetail';  // Import the new detail page

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/crop-suggestion" element={<CropSuggestion />} />
          <Route path="/services/disease-classification" element={<DiseaseClassification />} />
          <Route path="/services/water-resource" element={<WaterResource />} />
          <Route path="/services/chatbot" element={<ChatBot />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/about-us-detail" element={<AboutUsDetail />} />  {/* Add the new route here */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
