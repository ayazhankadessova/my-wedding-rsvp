import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import flowerBouquet from "@/assets/flower-bouquet.png";

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "What should I wear?",
      answer: "We'd love to see you in pastel colors — think soft pinks, lavenders, mint greens, or baby blues. But honestly, wear whatever makes you feel comfortable and beautiful!",
    },
    {
      question: "Where will the wedding be?",
      answer: "The venue location will be shared soon. We'll send you all the details including directions and parking information as the date approaches.",
    },
    {
      question: "What time should I arrive?",
      answer: "Please arrive at least 30 minutes before the ceremony starts so you have time to settle in. Exact times will be announced soon!",
    },
  ];

  return (
    <section className="section-cream py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-brown text-5xl md:text-6xl lg:text-7xl mb-4">
            Questions & Answers
          </h2>
          <div className="elegant-divider" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
            >
              <motion.img
                src={flowerBouquet}
                alt=""
                className="w-16 h-16 mx-auto mb-6 opacity-60"
                whileHover={{ scale: 1.1 }}
              />
              <h3 className="font-script text-brown text-xl md:text-2xl mb-4">
                {faq.question}
              </h3>
              <p className="font-body text-brown-light text-sm leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
