import { motion } from "framer-motion";
import floralCorner from "@/assets/floral-corner-1.png";
import elephantDecoration from "@/assets/elephant-decoration.png";

const HeroSection = () => {
  return (
    <section className="section-cream min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Decorative florals - top left */}
      <motion.img
        src={floralCorner}
        alt=""
        className="absolute top-0 left-0 w-48 md:w-72 lg:w-80 opacity-80"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      {/* Decorative florals - top right (flipped) */}
      <motion.img
        src={floralCorner}
        alt=""
        className="absolute top-0 right-0 w-48 md:w-72 lg:w-80 opacity-80 -scale-x-100"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      {/* Elephant decorations - sides */}
      <motion.img
        src={elephantDecoration}
        alt=""
        className="absolute bottom-20 left-4 md:left-10 w-24 md:w-32 lg:w-40 opacity-60"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      />
      
      <motion.img
        src={elephantDecoration}
        alt=""
        className="absolute bottom-20 right-4 md:right-10 w-24 md:w-32 lg:w-40 opacity-60 -scale-x-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.6, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      />

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        <motion.p
          className="font-body text-brown-light tracking-[0.3em] uppercase text-sm md:text-base mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          You're Invited to the Wedding of
        </motion.p>

        <motion.h1
          className="font-script text-brown text-6xl md:text-8xl lg:text-9xl font-medium leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Ayazhan
        </motion.h1>
        
        <motion.p
          className="font-script text-gold text-4xl md:text-5xl my-2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          &
        </motion.p>
        
        <motion.h1
          className="font-script text-brown text-6xl md:text-8xl lg:text-9xl font-medium leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Shokan
        </motion.h1>

        <motion.div
          className="elegant-divider-long mt-12 mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />

        <motion.p
          className="font-body text-brown-light tracking-widest text-lg md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Save the Date
        </motion.p>

        <motion.a
          href="#details"
          className="inline-block mt-10 px-10 py-3 bg-gold text-on-gold font-body text-sm tracking-widest uppercase hover:bg-gold-dark transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View Details
        </motion.a>
      </div>

      {/* Decorative florals - bottom */}
      <motion.img
        src={floralCorner}
        alt=""
        className="absolute bottom-0 left-0 w-48 md:w-64 opacity-70 rotate-180"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      />
      
      <motion.img
        src={floralCorner}
        alt=""
        className="absolute bottom-0 right-0 w-48 md:w-64 opacity-70 rotate-180 -scale-x-100"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      />
    </section>
  );
};

export default HeroSection;
