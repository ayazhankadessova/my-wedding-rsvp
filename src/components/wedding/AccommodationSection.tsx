import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import flowerDecor from "@/assets/flower-.png";

const AccommodationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-cream py-24 md:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.img
        src={flowerDecor}
        alt=""
        className="absolute top-10 right-10 w-24 md:w-32 opacity-30"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : {}}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-brown text-5xl md:text-6xl lg:text-7xl mb-4">
            Accommodation
          </h2>
          <div className="elegant-divider mb-10" />
          
          <div className="space-y-6 font-body text-brown-light leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We're planning to arrange special accommodation for our guests!
            </motion.p>
            
            <motion.div
              className="bg-cream-dark p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h3 className="font-script text-brown text-2xl mb-4">
                For Our Female Guests
              </h3>
              <p className="text-sm">
                We're looking into renting a place where our female friends can stay together. 
                It'll be like a little gathering of its own!
              </p>
            </motion.div>

            <motion.div
              className="bg-cream-dark p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="font-script text-brown text-2xl mb-4">
                Additional Apartments
              </h3>
              <p className="text-sm">
                We may also have one or two apartments available for other guests (depending on availability). 
                More details will follow as we finalize the arrangements.
              </p>
            </motion.div>

            <motion.p
              className="text-sm italic pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Stay tuned — we'll share all the specifics soon!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccommodationSection;
