import Navigation from "@/components/wedding/Navigation";
import HeroSection from "@/components/wedding/HeroSection";
import DetailsSection from "@/components/wedding/DetailsSection";
import ScheduleSection from "@/components/wedding/ScheduleSection";
import AccommodationSection from "@/components/wedding/AccommodationSection";
import GiftRegistrySection from "@/components/wedding/GiftRegistrySection";
import FAQSection from "@/components/wedding/FAQSection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <DetailsSection />
      <section id="schedule">
        <ScheduleSection />
      </section>
      <section id="accommodation">
        <AccommodationSection />
      </section>
      <section id="registry">
        <GiftRegistrySection />
      </section>
      <section id="faq">
        <FAQSection />
      </section>
      <FooterSection />
    </div>
  );
};

export default Index;
