import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import AboutUsSection from './AboutUsSection';
import ContactUsSection from './ContactUsSection';
import MeetOurFarmersSection from './MeetOurFarmersSection';
import MarketLeaderSection from './MarketLeaderSection';

function HomePage() {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutUsSection />
      <MeetOurFarmersSection />
      <ContactUsSection />
      <MarketLeaderSection />
    </div>
  );
}

export default HomePage;
