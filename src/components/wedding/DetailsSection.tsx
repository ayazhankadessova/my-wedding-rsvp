import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import flowerBouquet from "@/assets/flower-bouquet.png";

const DetailsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const details = [
    {
      title: "The Venue",
      description: "Venue details will be shared soon. Stay tuned for the exact location and directions.",
      icon: "📍",
    },
    {
      title: "The Time",
      description: "The celebration time will be announced. Please check back for updates.",
      icon: "🕐",
    },
    {
      title: "Dress Code",
      description: "We'd love to see you in pastel colors! Anything soft and beautiful works — but ultimately, wear whatever makes you feel wonderful.",
      icon: "👗",
    },
  ];

  return (
    <section id="details" className="section-gold py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-on-gold text-5xl md:text-6xl lg:text-7xl mb-4">
            The Celebration
          </h2>
          <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-cream to-transparent" />
        </motion.div>

        {/* Details cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {details.map((detail, index) => (
            <motion.div
              key={detail.title}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <motion.img
                src={flowerBouquet}
                alt=""
                className="w-20 h-20 mx-auto mb-6 opacity-70"
                whileHover={{ scale: 1.1, rotate: 5 }}
              />
              <h3 className="font-script text-on-gold text-2xl md:text-3xl mb-4">
                {detail.title}
              </h3>
              <p className="font-body text-on-gold/90 text-sm leading-relaxed">
                {detail.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
