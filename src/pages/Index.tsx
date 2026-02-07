import Navigation from "@/components/wedding/Navigation";
import HeroSection from "@/components/wedding/HeroSection";
import ScheduleSection from "@/components/wedding/ScheduleSection";
import AccommodationSection from "@/components/wedding/AccommodationSection";
import GiftRegistrySection from "@/components/wedding/GiftRegistrySection";
import RSVPSection from "@/components/wedding/RSVPSection";
import FAQSection from "@/components/wedding/FAQSection";
import FooterSection from "@/components/wedding/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <section id="schedule">
        <ScheduleSection />
      </section>
      <section id="accommodation">
        <AccommodationSection />
      </section>
      <section id="registry">
        <GiftRegistrySection />
      </section>
      <section id="rsvp">
        <RSVPSection />
      </section>
      <FAQSection />
      <FooterSection />
    </div>
  );
};

export default Index;
