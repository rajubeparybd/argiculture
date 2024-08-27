import HeroSection from './HeroSection';
import ServicesSection from './ServicesSection';
import AboutUsSection from './AboutUsSection';
import ContactUsSection from './ContactUsSection';
import MeetOurFarmersSection from './MeetOurFarmersSection';
import MarketLeaderSection from './MarketLeaderSection';

function HomePage() {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <ServicesSection />
      </section>
      <section id="about">
        <AboutUsSection />
      </section>
      <section id="farmers">
        <MeetOurFarmersSection />
      </section>
      <section id="contact">
        <ContactUsSection />
      </section>
      <section id="market">
        <MarketLeaderSection />
      </section>
    </div>
  );
}

export default HomePage;
