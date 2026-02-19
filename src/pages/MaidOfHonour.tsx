import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/wedding/Navigation";
import FooterSection from "@/components/wedding/FooterSection";
import floralCorner from "@/assets/flower-laying-diagonal.png";
import leftBottomHome from "@/assets/left-bottom-home.png";
import rightBottomFlower from "@/assets/right-bottom-flower.png";
import flowerDecor from "@/assets/flower-.png";

const MaidOfHonour = () => {
  const messageRef = useRef(null);
  const isMessageInView = useInView(messageRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="section-cream py-24 md:py-32 relative overflow-hidden flex items-center justify-center">
        <motion.img
          src={floralCorner}
          alt=""
          className="absolute top-0 left-0 w-48 md:w-72 lg:w-80 opacity-80"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.img
          src={floralCorner}
          alt=""
          className="absolute top-0 right-0 w-48 md:w-72 lg:w-80 opacity-80 -scale-x-100"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.8, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.img
          src={leftBottomHome}
          alt=""
          className="absolute bottom-20 left-4 md:left-10 w-24 md:w-32 lg:w-40 opacity-60"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
        <motion.img
          src={rightBottomFlower}
          alt=""
          className="absolute bottom-20 right-4 md:right-10 w-24 md:w-32 lg:w-40 opacity-60"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        />

        <div className="relative z-10 text-center px-4">
          <motion.p
            className="font-body text-brown-light tracking-[0.3em] uppercase text-sm md:text-base mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dear Gulim
          </motion.p>

          <motion.h1
            className="font-script text-brown text-4xl md:text-6xl lg:text-7xl font-medium leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Will you be my
            <br />
            Maid of Honour?
          </motion.h1>

          <motion.div
            className="elegant-divider-long mt-12 mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />

          <motion.p
            className="font-script text-brown text-2xl md:text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Ayazhan's Qyz Uzatu — August 7, 2026
          </motion.p>
        </div>

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

      {/* Heartfelt Message + Travel & Hotel Cards */}
      <section className="section-cream py-24 md:py-32 relative overflow-hidden">
        <motion.img
          src={flowerDecor}
          alt=""
          className="absolute top-10 right-10 w-24 md:w-32 opacity-30"
          initial={{ opacity: 0 }}
          animate={isMessageInView ? { opacity: 0.3 } : {}}
          transition={{ duration: 1 }}
        />

        <div className="container mx-auto px-4" ref={messageRef}>
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isMessageInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6 font-body text-brown-light leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isMessageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Through all the late-night talks, the silly laughter only we understand,
                and the quiet moments that didn't need any words — you've been my person.
                Thank you for always showing up, exactly as you are.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isMessageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                I can't imagine this day without you standing next to me.
              </motion.p>

              <motion.div
                className="bg-cream-dark p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isMessageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="font-script text-brown text-2xl mb-4">
                  Your Journey, Covered
                </h3>
                <p className="text-sm">
                  Your round-trip flight from Astana to Oskemen and back is on me.
                  Just pack your favourite outfit and leave the rest to me.
                </p>
              </motion.div>

              <motion.div
                className="bg-cream-dark p-8 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isMessageInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <h3 className="font-script text-brown text-2xl mb-4">
                  A Place to Rest
                </h3>
                <p className="text-sm">
                  Your hotel in Oskemen is taken care of for the whole celebration.
                  Consider it a little thank-you for years of friendship.
                </p>
              </motion.div>

              <motion.p
                className="text-sm italic pt-4"
                initial={{ opacity: 0 }}
                animate={isMessageInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                See you in Oskemen, love.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default MaidOfHonour;
