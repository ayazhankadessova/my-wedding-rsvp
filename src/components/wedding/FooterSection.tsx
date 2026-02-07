import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import floralCorner from "@/assets/flower-laying-diagonal.png";
import flowerDecor from "@/assets/right-bottom-flower.png";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer className="section-cream py-12 md:py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.img
        src={floralCorner}
        alt=""
        className="absolute top-0 left-0 w-32 opacity-30"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : {}}
        transition={{ duration: 1 }}
      />
      <motion.img
        src={floralCorner}
        alt=""
        className="absolute top-0 right-0 w-32 opacity-30 -scale-x-100"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.3 } : {}}
        transition={{ duration: 1, delay: 0.1 }}
      />

      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-brown text-5xl md:text-6xl lg:text-7xl mb-6">
            We Can't Wait to See You!
          </h2>
        </motion.div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="font-script text-brown text-3xl md:text-4xl mb-2">
            Ayazhan & Shokan
          </p>
          <p className="font-body text-brown-light text-sm tracking-widest">
            With love
          </p>
        </motion.div>

        {/* Bottom florals */}
        <motion.img
          src={flowerDecor}
          alt=""
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 opacity-40"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 0.4 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>
    </footer>
  );
};

export default FooterSection;
